<template>
  <div class="start-quiz step-1">
    <template v-if="profile">
      <ProfileBox
        :image="profile.image"
        :name="profile.name"
      />
    </template>
  </div>
</template>

<script>
import ProfileBox from '@/components/ProfileBox.vue'
export default {
  name: 'startQuiz',
  components: {
    ProfileBox
  },
  props: {
    profile: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
