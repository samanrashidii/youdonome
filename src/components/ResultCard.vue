<template>
  <div class="result-card">
      <Logo
        :isTextVisible="true"
      />
      <img
        src="@/assets/logo.svg"
        alt=""
      >
      <h4 />
      <p />
      <div class="card-footer">
          <img
            src="@/assets/logo.svg"
            alt=""
          >
          <strong></strong>
      </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  name: 'resultCard',
  components: {
    Logo
  }
}
</script>
