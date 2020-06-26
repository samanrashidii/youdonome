<template>
  <div id="app">
    <router-view/>
    <Socials />
  </div>
</template>

<script>
import Socials from '@/components/Socials.vue'
export default {
  components: {
    Socials
  }
}
</script>

<style lang="scss">
@import "./sass/main";
</style>
