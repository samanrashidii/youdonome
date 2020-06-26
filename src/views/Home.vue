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
        v-if="profiles.length > 0"
        class="profile-box-wrapper"
      >
        <ProfileBox
          v-for="(profile, index) in profiles"
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
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Logo,
    Title,
    ProfileBox
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
