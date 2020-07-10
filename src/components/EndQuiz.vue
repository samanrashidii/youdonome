<template>
  <div class="end-quiz step-3">
    <ResultCard />
  </div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
import ResultCard from '@/components/ResultCard.vue'
export default {
  name: 'endQuiz',
  components: {
    ResultCard
  }
}
</script>
