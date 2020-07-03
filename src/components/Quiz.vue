<template>
  <div class="main-quiz step-2">
    <ProgressBar
      :current="questionStep"
      :total="totalQuestion"
    />
    <QuestionBox
      :question="currentQuestion"
      @optionSelected="setAnsweredOption"
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
import { mapActions, mapGetters } from 'vuex'
import ProgressBar from '@/components/ProgressBar'
import QuestionBox from '@/components/QuestionBox'

export default {
  name: 'mainQuiz',
  components: {
    ProgressBar,
    QuestionBox
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
    },
    totalQuestion: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      answeredQustion: null
    }
  },
  computed: {
    ...mapGetters({
      quizData: 'quiz/quizData'
    }),
    questions () {
      return this.$t('questions')
    },
    currentQuestion () {
      return this.questions.filter((question, index) => (index + 1) === this.questionStep)[0]
    }
  },
  methods: {
    ...mapActions({
      setQuestionStep: 'quiz/setQuestionStep',
      updateCorrectAnswer: 'quiz/updateCorrectAnswer'
    }),
    confirmAnswer () {
      if (this.answeredQustion !== null) {
        this.profile.answers.forEach((answer) => {
          if (answer.id === this.currentQuestion.id) {
            if (this.answeredQustion === answer.correct) {
              this.updateCorrectAnswer()
            }
          }
        })
        this.setQuestionStep()
        console.log('Correct Answers : ', this.quizData.correctAnswers)
      }
    },
    setAnsweredOption (index) {
      this.answeredQustion = index
    }
  }
}
</script>
