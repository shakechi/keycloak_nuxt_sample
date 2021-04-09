<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Navigation lists
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list nav dense>
          <v-list-group
            v-for="nav_list in nav_lists"
            no-action
            :prepend-icon="nav_list.icon"
            :key="nav_list.name"
          >
            <tamplate v-if="nav_list.lists2 === undefined">
              <v-list-item
                :to="nav_list.link"
                :key="nav_list.name"
                @click="menu_close"
                :append-icon="nav_list.lists2 ? undefined : ''"
              >
                <v-list-item-icon>
                  <v-icon>{{ nav_list.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title> {{ nav_list.name }} </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </tamplate>

            <template v:else v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ nav_list.name }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-group
              v-for="list2 in nav_list.lists2"
              :key="list2.name"
              :prepend-icon="list2.lists3 ? undefined : ''"
              no-action
              :value="true"
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ list2.name }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="list3 in list2.lists3"
                :key="list3.name"
                :to="list3.link"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ list3.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
    <v-footer color="primary" dark app> Vuetify </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    menu_close() {
      // this.nav_lists.forEach((nav_list) => (nav_list.active = false))
    },
  },
  data() {
    return {
      drawer: null,
      nav_lists: [
        {
          name: 'Getting Started',
          icon: 'mdi-speedometer',
          // active: false,
          lists2: [
            {
              name: 'Quick Start',
              lists3: [
                {
                  name: '3',
                  link: '3',
                },
                {
                  name: '4',
                  link: '4',
                },
              ],
            },
            {
              name: 'Pre-made layouts',
              link: '/pre-made-layouts',
            },
          ],
        },
        {
          name: 'Customization',
          icon: 'mdi-cogs',
          link: '/customization',
        },
        {
          name: 'Styles & animations',
          icon: 'mdi-palette',
          // active: false,
          lists2: [
            {
              name: 'Colors',
              link: '/colors',
            },
            {
              name: 'Content',
              link: '/content',
            },
            {
              name: 'Display',
              link: '/display',
            },
          ],
        },
        {
          name: 'Preminum themes',
          icon: 'mdi-vuetify',
        },
      ],
    }
  },
}
</script>