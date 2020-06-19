<template>
  <div class="home">
    <Logo />
    <Title
      :value="$t('home.mainTitle')"
      size="xlg"
    />
    <template v-if="profileBoxes">
      <ProfileBox
        v-for="(profile, index) in profileBoxes"
        :key="index"
        :image="profile.image"
        :name="profile.name"
      />
    </template>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Title from '@/components/Title.vue'
import ProfileBox from '@/components/ProfileBox.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Logo,
    Title,
    ProfileBox
  },
  computed: {
    ...mapGetters({
      profileBoxes: 'profiles/profileBoxes'
    })
  },
  created () {
    this.asdMethod()
  },
  methods: {
    ...mapActions({
      asdMethod: 'profiles/getProfiles'
    })
  }
}
</script>
