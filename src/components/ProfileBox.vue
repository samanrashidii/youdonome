<template>
    <div class="profile-box">
        <img
            v-if="image"
            :src="require(`@/assets/profiles/${image}`)"
            :alt="name"
        />
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
export default {
  name: 'ProfileBox',
  props: {
    image: {
      type: [String, Boolean],
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
