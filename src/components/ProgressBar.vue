<template>
    <div
      class="progress-bar"
      :class="{'display-only': displayOnly}"
    >
        <span
            :style="{width: percentage}"
        />
        <strong
          v-if="!displayOnly"
        >
          {{ current + ' / ' + total }}
        </strong>
        <strong
          v-else
        >
          {{ percentage }}
        </strong>
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
    },
    displayOnly: {
      type: Boolean,
      default: false
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
