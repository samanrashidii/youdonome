<template>
  <div class="home">
    <Logo />
    <Title />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Title
  }
}
</script>
