<template>
  <div class="main-quiz step-2">
    <ProgressBar />
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'
export default {
  name: 'mainQuiz',
  components: {
    ProgressBar
  },
  props: {
    profile: {
      type: Object,
      default: () => {}
    },
    username: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
