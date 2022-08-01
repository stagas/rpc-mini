<h1>
rpc-mini <a href="https://npmjs.org/package/rpc-mini"><img src="https://img.shields.io/badge/npm-v1.0.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-35-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/rpc-mini@1.0.0/dist/rpc-mini.min.js"><img src="https://img.shields.io/badge/brotli-328b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

A mini RPC for MessagePort interfaces.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i rpc-mini </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add rpc-mini </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add rpc-mini</code>
</td></tr></table>
</h4>

## API

<p>  <details id="Rpc$1" title="TypeAlias" open><summary><span><a href="#Rpc$1">#</a></span>  <code><strong>Rpc</strong></code>    </summary>  <a href="src/rpc-mini.ts#L1">src/rpc-mini.ts#L1</a>  <ul><p><details id="__type$2" title="Function" ><summary><span><a href="#__type$2">#</a></span>  <em>(method, args)</em>    </summary>    <ul>    <p>    <details id="method$4" title="Parameter" ><summary><span><a href="#method$4">#</a></span>  <code><strong>method</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="args$5" title="Parameter" ><summary><span><a href="#args$5">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details>  <p><strong></strong><em>(method, args)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>        </ul></details><details id="rpc$6" title="Function" open><summary><span><a href="#rpc$6">#</a></span>  <code><strong>rpc</strong></code><em>(port, api)</em>    </summary>  <a href="src/rpc-mini.ts#L3">src/rpc-mini.ts#L3</a>  <ul>    <p>    <details id="port$8" title="Parameter" ><summary><span><a href="#port$8">#</a></span>  <code><strong>port</strong></code>    </summary>    <ul><p><span>MessagePort</span></p>        </ul></details><details id="api$9" title="Parameter" ><summary><span><a href="#api$9">#</a></span>  <code><strong>api</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>Record</span>&lt;string, <details id="__type$10" title="Function" ><summary><span><a href="#__type$10">#</a></span>  <em>(args)</em>    </summary>    <ul>    <p>    <details id="args$12" title="Parameter" ><summary><span><a href="#args$12">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details>  <p><strong></strong><em>(args)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;any&gt;</ul></p></p>    </ul></details>&gt;</p>        </ul></details>  <p><strong>rpc</strong><em>(port, api)</em>  &nbsp;=&gt;  <ul><a href="#Rpc$1">Rpc</a></ul></p></p>    </ul></details></p>

## Contributing

[Fork](https://github.com/stagas/rpc-mini/fork) or [edit](https://github.dev/stagas/rpc-mini) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
