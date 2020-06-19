<template>
    <div class="title">
        <h1
          v-if="size === 'xlg'"
          v-html="value"
        />
        <h2
          v-if="size === 'lg'"
          v-html="value"
        />
        <h3
          v-if="size === 'md'"
          v-html="value"
        />
        <h4
          v-if="size === 'sm'"
          v-html="value"
        />
        <h5
          v-if="size === 'xs'"
          v-html="value"
        />
        <h6
          v-if="size === 'xss'"
          v-html="value"
        />
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    size: {
      type: String,
      default: 'md'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>
