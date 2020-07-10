<template>
  <div class="end-quiz step-3">
    <ResultCard
      :profile="quizData.profile"
      :correctAnswers="quizData.correctAnswers"
      :totalQuestions="quizData.totalQuestion"
      :username="quizData.username"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ResultCard from '@/components/ResultCard.vue'

export default {
  name: 'endQuiz',
  components: {
    ResultCard
  },
  computed: {
    ...mapGetters({
      quizData: 'quiz/quizData'
    })
  }
}
</script>
