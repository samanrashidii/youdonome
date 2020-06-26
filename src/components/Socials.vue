<template>
  <div class="socials">
    <ul>
        <li
            v-for="social in socials"
            :key="social.id"
        >
            <a
                :href="social.url"
                target="_blank"
                :title="social.name"
            >
                <img
                    :src="require(`@/assets/socials/${social.icon}`)"
                    :alt="social.name"
                >
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      socials: [
        {
          id: 0,
          name: 'Github',
          icon: 'github.svg',
          url: 'https://github.com/samanrashidii/youdonome'
        },
        {
          id: 1,
          name: 'Instagram',
          icon: 'instagram.svg',
          url: 'https://www.instagram.com/mad.vortex'
        }
      ]
    }
  }
}
</script>
