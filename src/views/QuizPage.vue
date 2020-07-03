<template>
  <div class="quiz-page">
    <!-- Step 1 -->
    <StartQuiz
      v-if="quizData.step === 1"
      :profile="quizData.profile"
    />
    <!-- Step 2 -->
    <Quiz
      v-if="quizData.step === 2"
    />
    <!-- Step 3 -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import StartQuiz from '@/components/StartQuiz.vue'
import Quiz from '@/components/Quiz.vue'
export default {
  name: 'QuizPage',
  components: {
    StartQuiz,
    Quiz
  },
  computed: {
    ...mapGetters({
      profiles: 'profiles/profiles',
      quizData: 'quiz/quizData'
    })
  },
  mounted () {
    const slug = this.$route.params.id
    const userProfile = this.profiles.filter(profile => slug === profile.slug)[0]
    this.updateProfile(userProfile)
  },
  methods: {
    ...mapActions({
      updateProfile: 'quiz/updateProfile'
    })
  }
}
</script>
