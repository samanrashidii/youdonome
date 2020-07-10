<template>
  <div class="end-quiz step-3">
    <ResultCard
      :profile="profile"
    />
  </div>
</template>

<script>
import ResultCard from '@/components/ResultCard.vue'
export default {
  name: 'endQuiz',
  components: {
    ResultCard
  },
  props: {
    profile: {
      type: Object,
      defualt: () => {}
    }
  }
}
</script>
