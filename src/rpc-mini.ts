export type Rpc = (method: string, ...args: any[]) => any

export const rpc = (port: MessagePort, api: Record<string, (...args: any[]) => Promise<any>> = {}): Rpc => {
  let callbackId = 0
  const calls = new Map<number, { resolve: (result: any) => void; reject: (error: Error) => void }>()

  port.onmessage = async ({ data }) => {
    const { cid } = data

    if (data.method) {
      let result: any
      try {
        result = await api[data.method](...data.args)
        port.postMessage({ cid, result })
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
    port.postMessage({ method, args, cid })
    return promise
  }

  return call
}
