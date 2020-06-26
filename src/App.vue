<template>
  <div id="app">
    <router-view/>
    <Socials />
  </div>
</template>

<script>
import Socials from '@/components/Socials.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    Socials
  },
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
