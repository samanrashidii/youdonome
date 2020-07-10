<template>
    <div
      class="logo"
      :class="{'with-text': isTextVisible}"
    >
        <img
          src="@/assets/logo.svg"
          :alt="$t('common.logo')"
        />
        <h3
          v-if="isTextVisible"
          v-html="this.$t('common.brandName')"
        />
    </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    isTextVisible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
