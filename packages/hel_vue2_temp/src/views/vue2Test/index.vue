<template>
  <div class="red" @click="click">vue2Test</div>
</template>

<script>

export default {
  methods: {
    click() {
      alert(1)
      // this.$emit('btnClick');
      // // vue3 events needs the Camel-Case start with "on"
      // this.$emit('onBtnClick');
    }
  }
}
</script>

<style lang="scss" scoped>
.red{
  color: red;
}
</style>
