<template>
  <div>
    someModule-index
    <el-button @click="toPath">test</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    created() {
      console.log('====someModule-index====')
    },
    toPath() {
      this.$router.push({
        path: '/someModule/test'
      })
    }
  }
}
</script>
