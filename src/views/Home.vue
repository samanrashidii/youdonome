<template>
  <div class="home">
    <Logo />
    <Title
      :value="$t('home.mainTitle')"
      size="xlg"
    />
    <div class="frame">
      <div
        v-if="profileBoxes"
        class="profile-box-wrapper"
      >
        <ProfileBox
          v-for="(profile, index) in profileBoxes"
          :key="index"
          :image="profile.image"
          :name="profile.name"
          @click.native="profileClicked(profile)"
        />
      </div>
    </div>
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
    }),
    profileClicked (profile) {
      console.log(profile)
    }
  }
}
</script>
