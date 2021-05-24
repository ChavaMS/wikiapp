<template>
  <v-app id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand v-bind:to="{ name: 'Home' }">Wiki App</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item right v-bind:to="{ name: 'addtopic' }">
              Agregar investigación
            </b-nav-item>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#"  @click="signOut">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- END OF NAVBAR -->
    <v-main>
      <v-container fluid>
        <div id="app">
          <router-view />
        </div>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white-text">&copy; 2020-2021</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  updated () {
    this.initIdentity()
  },
  methods: {
    async initIdentity () {
    },
    signOut () {
      localStorage.removeItem('identity')
      localStorage.removeItem('token')
    }
  },
  props: {
    source: String
  }
}
</script>
