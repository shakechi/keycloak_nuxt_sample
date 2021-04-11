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

        <v-list nav expand dense>
          <!-- 1階層のみ -->
          <template v-for="nav_list in nav_lists">
            <v-list-item
              v-if="!nav_list.lists2"
              :to="nav_list.link"
              :key="nav_list.name"
              v-model="nav_list.active"
              @click="menu_close"
            >
              <v-list-item-icon>
                <v-icon>{{ nav_list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title> {{ nav_list.name }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- 1階層以降 -->

            <v-list-group
              v-else
              no-action
              :prepend-icon="nav_list.icon"
              :key="nav_list.name"
              v-model="nav_list.active"
            >
              <!-- 2階層 -->
              <template v-slot:activator>
                <v-list-item-content>
                  <!-- 1階層目タイトル -->
                  <v-list-item-title> {{ nav_list.name }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <template v-for="list2 in nav_list.lists2">
                <v-list-item
                  v-if="!list2.lists3"
                  :key="list2.name"
                  :to="list2.link"
                  v-model="list2.active"
                  @click="menu_close"
                >
                  <v-list-item-content>
                    <v-list-item-title> {{ list2.name }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-group
                  v-else
                  :key="list2.name"
                  :prepend-icon="list2.lists3 ? undefined : ''"
                  v-model="list2.active"
                  no-action
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
                    v-model="list3.active"
                    @click="menu_close"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ list3.name }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-group>
              </template>
            </v-list-group>
          </template>
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
      console.log(this.$nuxt.$route.path)
      const url = this.$nuxt.$route.path + "/"

      this.nav_lists.forEach((nav_list) => {
        if(!url.indexOf(nav_list.link+"/")) {
          console.log(url,nav_list.link)
          return
        }
        nav_list.active = false
        // console.log(nav_list)
        // console.log(nav_list.name,nav_list.lists2)
        if(nav_list.lists2 !== undefined){
          nav_list.lists2.forEach((list2)=>{
            if(!url.indexOf(list2.link+"/")) {
              console.log(url,list2.link)
              return
            }
            if(list2.lists3 !== undefined){
              list2.active = false
            }
          })
        }
        // for (let list2 in nav_list){
        //   console.log(list2)
        // }

        // for (let list2 of Object.keys(nav_list.list2)) {
        //   console.log(list2)
        // if (list2 === 'active') {
        //   list2 = false
        // }
      })
    },
    // menu_close() {
    //   console.log('menu_closeが呼ばれました')
    //   for (let list1 of this.nav_lists) {
    //     list1.active = false
    //     for (let list2 of list1) {
    //       console.log(list2)
    //     }
    //   }
    // },
  },
  data() {
    return {
      drawer: null,
      nav_lists: [
        {
          name: 'Getting Started',
          icon: 'mdi-speedometer',
          active: false,
          link: '/getting',
          lists2: [
            {
              name: 'Quick Start',
              link: '/getting/quick-start',
              active: false,
              lists3: [
                {
                  name: '3',
                  link: '/getting/quick-start/3',
                  active:false,
                },
                {
                  name: '4',
                  link: '/getting/quick-start/4',
                  active:false,
                },
              ],
            },
            {
              name: 'Quick Start2',
              link: '/getting/quick-start2',
              active: false,
              lists3: [
                {
                  name: '3-2',
                  link: '/getting/quick-start2/3-2',
                  active:false,
                },
                {
                  name: '4-2',
                  link: '/getting/quick-start2/4-2',
                  active:false,
                },
              ],
            },
            {
              name: 'Pre-made layouts',
              link: '/pre-made-layouts',
              active: false,
            },
          ],
        },
        {
          name: 'Customization',
          icon: 'mdi-cogs',
          link: '/customization',
          active: false,
        },
        {
          name: 'Styles & animations',
          icon: 'mdi-palette',
          link: '/style',
          active: false,
          lists2: [
            {
              name: 'Colors',
              link: '/style/colors',
              active: false,
            },
            {
              name: 'Content',
              link: '/style/content',
              active: false,
            },
            {
              name: 'Display',
              link: '/style/display',
              active: false,
            },
          ],
        },
        {
          name: 'Preminum themes',
          icon: 'mdi-vuetify',
          link: '/preminum_themes',
          active: false,
        },
      ],
    }
  },
}
</script>