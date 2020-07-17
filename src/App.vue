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
    this.getQuestions()
  },
  methods: {
    ...mapActions({
      getProfiles: 'profiles/getProfiles',
      getQuestions: 'quiz/getQuestions'
    })
  }
}
</script>

<style lang="scss">
@import "./sass/main";
</style>
