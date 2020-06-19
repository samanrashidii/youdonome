<template>
    <div class="profile-box">
        <img
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
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
