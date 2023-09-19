<template>
  <div>someModule-test
    <el-button @click="toPath">child</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    toPath() {
      this.$router.push({
        path: '/someModule/child'
      })
    }
  }
}
</script>
