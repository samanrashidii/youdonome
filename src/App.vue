<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created () {
    this.getProfiles()
  },
  methods: {
    ...mapActions({
      getProfiles: 'profiles/getProfiles'
    })
  }
}
</script>

<style lang="scss">
@import "./sass/main";
</style>
