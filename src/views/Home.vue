<template>
  <div class="home">
    <Logo />
    <Title
      :value="$t('home.mainTitle')"
      size="xlg"
    />
    <ProfileBox />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Title from '@/components/Title.vue'
import ProfileBox from '@/components/ProfileBox.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Title,
    ProfileBox
  }
}
</script>
