<template>
    <div class="progress-bar">
        <span
            :style="{width: percentage}"
        />
        <strong>{{ current + ' / ' + total }}</strong>
    </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    current: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    percentage () {
      const value = (this.current / this.total) * 100
      return value + '%'
    }
  }
}
</script>
