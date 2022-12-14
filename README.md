

<h1>
rpc-mini <a href="https://npmjs.org/package/rpc-mini"><img src="https://img.shields.io/badge/npm-v1.1.0-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-63-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/rpc-mini@1.1.0/dist/rpc-mini.min.js"><img src="https://img.shields.io/badge/brotli-509b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
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

<p>  <details id="Rpc$1" title="TypeAlias" open><summary><span><a href="#Rpc$1">#</a></span>  <code><strong>Rpc</strong></code>    </summary>  <a href=""></a>  <ul><p><details id="__type$2" title="Function" ><summary><span><a href="#__type$2">#</a></span>  <em>(method, args)</em>    </summary>    <ul>    <p>    <details id="method$4" title="Parameter" ><summary><span><a href="#method$4">#</a></span>  <code><strong>method</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="args$5" title="Parameter" ><summary><span><a href="#args$5">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details>  <p><strong></strong><em>(method, args)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>        </ul></details><details id="rpc$6" title="Function" open><summary><span><a href="#rpc$6">#</a></span>  <code><strong>rpc</strong></code><em>(port, api, transferables)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="port$9" title="Parameter" ><summary><span><a href="#port$9">#</a></span>  <code><strong>port</strong></code>    </summary>    <ul><p><span>MessagePort</span></p>        </ul></details><details id="api$10" title="Parameter" ><summary><span><a href="#api$10">#</a></span>  <code><strong>api</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>Record</span>&lt;string, <details id="__type$11" title="Function" ><summary><span><a href="#__type$11">#</a></span>  <em>(args)</em>    </summary>    <ul>    <p>    <details id="args$13" title="Parameter" ><summary><span><a href="#args$13">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p>any  []</p>        </ul></details>  <p><strong></strong><em>(args)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;any&gt;</ul></p></p>    </ul></details>&gt;</p>        </ul></details><details id="transferables$14" title="Parameter" ><summary><span><a href="#transferables$14">#</a></span>  <code><strong>transferables</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>defaultTransferables</code></span>  </summary>    <ul><p><span>Ctor</span>  []</p>        </ul></details>  <p><strong>rpc</strong>&lt;<span>T</span>&gt;<em>(port, api, transferables)</em>  &nbsp;=&gt;  <ul><a href="#Rpc$1">Rpc</a> &amp; <a href="#T$8">T</a></ul></p></p>    </ul></details></p>

## Credits
- [everyday-types](https://npmjs.org/package/everyday-types) by [stagas](https://github.com/stagas) &ndash; Everyday utility types
- [proxy-toolkit](https://npmjs.org/package/proxy-toolkit) by [stagas](https://github.com/stagas) &ndash; Proxy toolkit.

## Contributing

[Fork](https://github.com/stagas/rpc-mini/fork) or [edit](https://github.dev/stagas/rpc-mini) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
