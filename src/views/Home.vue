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
      <form
        class="search-form mt-2"
        @submit.prevent
      >
        <input
          v-model="search"
          type="text"
          name="search"
          :placeholder="$t('home.searchProfiles')"
        />
        <button type="submit">
          {{ $t('common.searchButton') }}
        </button>
      </form>
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
      <h4
        v-else
        v-html="$t('home.noResult')"
        class="mt-2 mb-2 text-center"
      />
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
  data () {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters({
      allProfiles: 'profiles/profiles'
    }),
    profiles () {
      let profiles
      if (this.search) {
        profiles = this.allProfiles.filter(profile => {
          const searchedName = this.search.toLowerCase()
          const profileName = profile.name.toLowerCase()
          if (profileName.indexOf(searchedName) !== -1) {
            return profile
          }
        })
      } else {
        profiles = this.allProfiles
      }
      return profiles
    }
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
