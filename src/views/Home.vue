<template>
  <div class="home">
    <div class="frame">
      <Logo />
      <Title
        :value="$t('home.mainTitle', {
          brandName: $t('common.brandName')
        })"
        size="xlg"
        class="mt-2"
      />
      <p
        v-html="$t('howToPlay.description')"
        class="description mt-2 text-center"
      />
      <div
        v-if="profiles.length > 0"
        class="profile-box-wrapper"
      >
        <ProfileBox
          v-for="(profile, index) in profiles"
          :key="index"
          :image="profile.image"
          :name="profile.name"
          :activity="profile.fieldOfActivity"
          @click.native="profileClicked(profile)"
        />
      </div>
      <Socials />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Title from '@/components/Title.vue'
import ProfileBox from '@/components/ProfileBox.vue'
import Socials from '@/components/Socials.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Logo,
    Title,
    ProfileBox,
    Socials
  },
  computed: {
    ...mapGetters({
      profiles: 'profiles/profiles'
    })
  },
  methods: {
    profileClicked (profile) {
      this.$router.push({
        name: 'quizpage',
        params: {
          id: profile.slug
        }
      })
    }
  }
}
</script>
