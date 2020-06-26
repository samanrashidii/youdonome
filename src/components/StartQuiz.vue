<template>
  <div class="start-quiz step-1">
    <ProfileBox
      :image="profile.image"
      :name="profile.name"
    />
    <form
      class="mt-3"
      @submit.prevent="usernameInserted()"
    >
      <input
        v-model="username"
        type="text"
        name="username"
        :placeholder="$t('quiz.usernamePlaceholder')"
      />
      <button type="submit">
        {{ $t('quiz.startQuizButton') }}
      </button>
    </form>
  </div>
</template>

<script>
import ProfileBox from '@/components/ProfileBox.vue'
export default {
  name: 'startQuiz',
  components: {
    ProfileBox
  },
  props: {
    profile: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      username: null
    }
  },
  methods: {
    usernameInserted () {
      alert(this.username)
    }
  }
}
</script>
