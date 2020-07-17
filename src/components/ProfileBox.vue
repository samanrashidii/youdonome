<template>
    <div
      class="profile-box"
      :class="{'display-only': displayOnly}"
    >
        <div
          v-if="activity.length > 0"
          class="activies"
        >
          <img
              v-for="(field, index) in activity"
              :key="index"
              :src="require(`@/assets/fields/${field}.svg`)"
              :alt="name"
          />
        </div>
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
    },
    activity: {
      type: Array,
      default: () => []
    },
    displayOnly: {
      type: Boolean,
      default: false
    }
  }
}
</script>
