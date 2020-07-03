<template>
  <div class="main-quiz step-2">
    <ProgressBar
      :current="questionStep"
      :total="3"
    />
    <QuestionBox
      :question="currentQuestion"
    />
    <a
      href="javascript:void(0)"
      class="btn"
      @click="confirmAnswer"
    >
      {{ $t('quiz.confirmAnswer') }}
    </a>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
import QuestionBox from '@/components/QuestionBox'

export default {
  name: 'mainQuiz',
  components: {
    ProgressBar,
    QuestionBox
  },
  computed: {
    questions () {
      return this.$t('questions')
    },
    currentQuestion () {
      return this.questions.filter((question, index) => index === this.questionStep)[0]
    }
  },
  props: {
    profile: {
      type: Object,
      default: () => {}
    },
    username: {
      type: Object,
      default: () => {}
    },
    questionStep: {
      type: Number,
      default: 0
    }
  },
  methods: {
    confirmAnswer () {
      alert()
    }
  }
}
</script>
