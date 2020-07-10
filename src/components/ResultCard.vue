<template>
  <div class="result-card">
      <Logo
        :isTextVisible="true"
      />
      <img
        class="result-status"
        src="@/assets/conditions/happy.svg"
        alt=""
      >
      <h4 />
      <p
        class="result-text text-center"
        v-html="$t('quiz.resultText', {
          answeredQuestions: 3,
          totalQuestions: 20
        })"
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
export default {
  name: 'resultCard',
  components: {
    Logo
  },
  props: {
    profile: {
      type: Object,
      defualt: () => {}
    }
  }
}
</script>
