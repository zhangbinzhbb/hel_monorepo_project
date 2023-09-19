<template>
  <div class="hello">
    <div style="border: 1px solid red; padding: 6px">
      <RemoteComp msg="Welcome to Your Vue.js + TypeScript + hel-micro App" />
    </div>
  </div>
</template>

<script>
// https://github.com/hel-eco/hel-tpl-remote-vue3-comps-ts
import comps from 'hel-tpl-remote-vue3-comps-ts'

export default {
  name: 'HelloWorld',
  components: {
    RemoteComp: comps.HelloWorld
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
