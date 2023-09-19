<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}4444</div>
    <el-button @click="toPath">test</el-button>

    <!-- <iframe
      id="iframe"
      src="http://localhost:3000/main-vue2/"
      frameborder="0"
      style="width: 100%; height: 400px"
    /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name'])
  },
  mounted() {
    window.addEventListener('message', function(event) {
      console.log('Received message:', event.data)
    })
  },
  methods: {
    toPath() {
      console.log('this.$route===>', this.$route)
      this.$router.push({
        path: '/example/test'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
