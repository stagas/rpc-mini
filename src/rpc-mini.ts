import { Ctor } from 'everyday-types'
import { Getter } from 'proxy-toolkit'

export type Rpc = (method: string, ...args: any[]) => any

const defaultTransferables: Ctor[] = [
  typeof OffscreenCanvas !== 'undefined' ? OffscreenCanvas : void 0,
  typeof MessagePort !== 'undefined' ? MessagePort : void 0
].filter(Boolean) as Ctor[]

export const rpc = <T = any>(port: MessagePort, api: Record<string, (...args: any[]) => Promise<any>> = {}, transferables: Ctor[] = defaultTransferables) => {

  const xfer = (args: any[], transferables: Ctor[]) => args.reduce((p, n) => {
    if (typeof n === 'object') {
      if (transferables.some((ctor) =>
        n instanceof ctor)) {
        p.push(n)
      } else
        for (const key in n) {
          if (
            n[key] &&
            transferables.some((ctor) =>
              n[key] instanceof ctor)
          ) {
            p.push(n[key])
          }
        }
    }
    return p
  }, [] as Transferable[])

  let callbackId = 0
  const calls = new Map<number, { resolve: (result: any) => void; reject: (error: Error) => void }>()

  port.onmessage = async ({ data }) => {
    const { cid } = data

    if (data.method) {
      let result: any
      try {
        result = await api[data.method](...data.args)
        port.postMessage({ cid, result }, xfer([result], transferables))
      } catch (error) {
        port.postMessage({ cid, error })
      }
    } else {
      if (!calls.has(cid)) {
        throw new ReferenceError('Callback id not found: ' + cid)
      }

      const { resolve, reject } = calls.get(cid)!
      calls.delete(data.cid)

      if (data.error) reject(data.error)
      else resolve(data.result)
    }
  }

  const call = (method: string, ...args: any[]) => {
    const cid = callbackId++

    const promise = new Promise<MessageEvent<any>>((resolve, reject) => {
      calls.set(cid, { resolve, reject })
    })

    port.postMessage(
      { method, args, cid },
      xfer(args, transferables)
    )

    return promise
  }

  const getter = Getter(key => call.bind(null, key), call) as unknown as Rpc & T

  return getter
}
