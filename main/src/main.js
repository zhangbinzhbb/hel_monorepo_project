import Vue from 'vue'
import { preFetchLib, bindVueRuntime } from 'hel-micro'

bindVueRuntime({ Vue })

// const fetchOptions = {
//   async getSubAppAndItsVersionFn() {
//     const res = await fetch(
//       "https://hel-eco.github.io/hel-tpl-remote-vue-comp/as_v1/hel-meta.json"
//     );
//     const meta = await res.json();
//     console.log("meta", meta);
//     return meta;
//   }
// };

// 本地联调
const enableCustom = !!window.location.port
const fetchOptions = {
  custom: {
    host: 'http://localhost:7001',
    enable: enableCustom,
    /**
     * defaut: false
     * 是否跳过获取 hel-meta.json 的获取步骤，true：跳过，false：不跳过
     * 当用户设定 custom.host 配置时，hel-micro 采取总是相信该 host 存在一个 hel-meta.json 文件并尝试去获取
     * 如获取失败时再去解析该 host 对应的首页并现场解析出 hel-meta.json 数据
     * 因此获取动作可能会报一个 404 not found 符合预期的行为，用户可设定 skipFetchHelMeta 为 true 跳过此步骤
     * 但建议加载线上模块时（非本地联调时），保持 skipFetchHelMeta 为 false 比较好，有利于提高模块加载速度（ 无html解析hel-meta.json过程 ）
     */
    skipFetchHelMeta: true
  }
}

async function main() {
  // console.log('fetchOptions:', fetchOptions)
  // from unpkg by default
  // see https://unpkg.com/hel-tpl-remote-vue-comps@1.1.3/hel_dist/index.html
  // await preFetchLib("hel-tpl-remote-vue-comps");

  // from user custom deploy location
  // see https://hel-eco.github.io/hel-tpl-remote-vue-comp/index.html
  // await preFetchLib('lib-zhangbb-component', fetchOptions)

  // await preFetchLib('lib-zhangbb')

  await import('./loadApp')
}

main().catch(console.error)
