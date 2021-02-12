<template>
  <v-app>
    <navigation />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '~/components/navigation.vue'

export default {
  components: {
    Navigation,
  },
  data: () => ({
    admins: [['page']],
    users: [['public-page'], ['secret-page']],
  }),
}
</script>
