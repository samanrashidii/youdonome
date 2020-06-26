<template>
  <div class="home">
    <div class="frame">
      <Logo />
      <Title
        :value="$t('home.mainTitle')"
        size="xlg"
        class="mt-2"
      />
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
      <Title
        :value="$t('howToPlay.title')"
        size="lg"
        class="mt-3 pt-3"
      />
      <div class="frame frame-sm">
        <p
          v-html="$t('howToPlay.description')"
          class="mt-2 text-center"
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
