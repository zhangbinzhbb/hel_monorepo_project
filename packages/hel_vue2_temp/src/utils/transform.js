// import Vue2 from 'lib-zhangbb-component';
import { preFetchLib } from 'hel-micro'

// 本地联调
const enableCustom = !!window.location.port
const fetchOptions = {
  custom: {
    host: 'http://localhost:7002',
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

function bindSlotContext(target = {}, context) {
  return Object.keys(target).map((key) => {
    const vnode = target[key]
    vnode.context = context
    return vnode
  })
}

/**
 * Transform vue3 components to DOM.
 * @param {*} WrapperComponentName
 * @param {*} wrapperId
 * @returns
 */
export const vue3ToVue2 = async(WrapperComponentName, wrapperId) => {
  let vm
  const name = 'hel-tpl-remote-vue3-comps-ts'
  const mod = await preFetchLib(name, fetchOptions)

  const { createApp, h } = mod.vueVersion
  const WrapperComponent = mod[WrapperComponentName]

  return {
    mounted() {
      vm = createApp({
        render: () => {
          return h(
            WrapperComponent,
            {
              ...this.$props
            }
          )
        }
      })
      vm.mount(`#${wrapperId}`)
    },
    props: WrapperComponent.props,
    render() {
      vm && vm.$forceUpdate()
    }
  }
}

/**
 * Transform vue2 components to DOM.
 * @param {*} WrapperComponentName
 * @param {*} wrapperId
 * @returns
 */
export const vue2ToVue3 = async(WrapperComponentName, wrapperId) => {
  let vm

  const name = 'hel-tpl-remote-vue3-comps-ts'
  const mod = await preFetchLib(name, fetchOptions)
  const Vue = mod.vueVersion
  const WrapperComponent = mod[WrapperComponentName]

  return {
    mounted() {
      const slots = bindSlotContext(this.$slots, this.__self)
      vm = new Vue({
        render: (createElement) => {
          return createElement(
            WrapperComponent,
            {
              on: this.$attrs,
              attrs: this.$attrs,
              props: this.$props,
              scopedSlots: this.$scopedSlots
            },
            slots
          )
        }
      })

      vm.$mount(`#${wrapperId}`)
    },
    props: WrapperComponent.props,
    render() {
      vm && vm.$forceUpdate()
    }
  }
}
