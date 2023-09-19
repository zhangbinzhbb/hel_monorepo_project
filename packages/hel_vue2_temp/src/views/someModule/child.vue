<template>
  <div>
    someModule-child
    <el-button @click="toPath">index</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    toPath() {
      this.$router.push({
        path: '/someModule/index'
      })
    }
  }
}
</script>
