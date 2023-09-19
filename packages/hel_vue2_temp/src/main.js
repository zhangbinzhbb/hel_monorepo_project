
import { isMasterApp } from 'hel-iso'
import { libReady } from 'hel-lib-proxy'
import { LIB_NAME } from './configs/subApp'

(async function() {
  console.log('子应用lib-zhangbb-component-vue2')
  const libProperties = await import('./entrance/libProperties')
  // 注意此处传递的是 default ，发射模块
  libReady(LIB_NAME, libProperties.default)

  // 非子应用时（即不是被别的模块触发载入的情况），自己挂载渲染节点，方便本地调试
  // 可根据项目实际情况控制是否载入 loadApp 文件
  // 当前模块作为宿主被加载时
  if (isMasterApp()) {
    console.log('子应用lib-zhangbb-componen-vue2 入口')
    await import('./loadApp')
  }
}()).catch(console.error)
