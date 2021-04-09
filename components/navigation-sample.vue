<template>
  <v-navigation-drawer permanent app clipped>
    <v-card class="mx-auto" width="300">
      <v-list>
        <nuxt-link to="/">
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </nuxt-link>
        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, url], i) in admins"
            :key="i"
            :to="url"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, url], i) in users"
            :key="i"
            :to="url"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    home: ['/'],
    admins: [['page', '/admins/page']],
    users: [
      ['public-page', '/users/public-page'],
      ['secret-page', '/users/secret-page'],
    ],
  }),
}
</script>