<template>
  <div class="result-card">
      <Logo
        :isTextVisible="true"
      />
      <img
        class="result-status"
        :src="require(`@/assets/conditions/${resultImage}`)"
        alt=""
      >
      <h4
        class="text-center mt-1"
        v-html="$t(`quiz.${resultText}`, {
          username: username
        })"
       />
      <p
        class="result-text text-center"
        v-html="$t('quiz.resultText', {
          answeredQuestions: correctAnswers,
          totalQuestions: totalQuestions
        })"
      />
      <ProgressBar
        :displayOnly="true"
        :current="correctAnswers"
        :total="totalQuestions"
      />
      <div class="card-footer">
          <img
            :src="require(`@/assets/profiles/${profile.image}`)"
            :alt="profile.name"
          >
          <strong>{{ profile.name }}</strong>
      </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import ProgressBar from '@/components/ProgressBar.vue'
export default {
  name: 'resultCard',
  components: {
    Logo,
    ProgressBar
  },
  props: {
    profile: {
      type: Object,
      defualt: () => {}
    },
    username: {
      type: String,
      defualt: ''
    },
    correctAnswers: {
      type: Number,
      defualt: 0
    },
    totalQuestions: {
      type: Number,
      defualt: 0
    }
  },
  data () {
    return {
      resultImage: 'happy.svg',
      resultText: 'happyText'
    }
  },
  computed: {
    percentage () {
      const value = (this.correctAnswers / this.totalQuestions) * 100
      return value
    }
  },
  mounted () {
    this.resultCalculator()
  },
  methods: {
    resultCalculator () {
      if (this.percentage < 40) {
        // Sad Face
        this.resultImage = 'sad.svg'
        this.resultText = 'sadText'
      } else if (this.percentage < 70) {
        // Angry Face
        this.resultImage = 'angry.svg'
        this.resultText = 'angryText'
      } else if (this.percentage <= 100) {
        // Happy Face
        this.resultImage = 'happy.svg'
        this.resultText = 'happyText'
      }
    }
  }
}
</script>
