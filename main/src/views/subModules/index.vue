<template>
  <div class="hello">
    <RemoteCompAsyncBetter name="loaded in codesandbox" />
  </div>
</template>

<script>
// https://github.com/hel-eco/hel-tpl-remote-vue-comp
import { preFetchLib, core } from 'hel-micro'
// import Loading from './Loading'
const enableCustom = !!window.location.port
const fetchOptions = {
  custom: {
    host: 'http://localhost:7001',
    enable: enableCustom
  }
}

export default {
  name: 'HelloWorld',
  components: {
    // better way, see doc: https://v2.cn.vuejs.org/v2/guide/components-dynamic-async.html
    RemoteCompAsyncBetter: () => ({
      component: new Promise(async(r, j) => {
        try {
          const mod = await preFetchLib('lib-zhangbb-1', fetchOptions)
          r(mod.App)
        } catch (err) {
          j(err)
        }
      })
    //   loading: Loading,
    //   error: Loading,
    //   delay: 1,
    //   timeout: 3000
    })
  },
  props: {
    msg: String
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>

