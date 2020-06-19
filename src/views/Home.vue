<template>
  <div class="home">
    <Logo />
    <Title
      :value="$t('home.mainTitle')"
      size="xlg"
    />
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
