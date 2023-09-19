<template>
  <div class="dashboard-container">
    主界面name
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    // asynccomp: async() => {
    //   const mod = await preFetchLib('lib-zhangbb', fetchOptions)
    //   console.log('mod===>', mod)
    //   return mod.SomeModule
    // }
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
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
