<template>
  <v-app>
    <toolbar
    :test="test"
    :login="login"
    :profile="profile"
    :loggedIn="loggedIn" />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Toolbar from '@/components/Toolbar';
  export default {
    name: 'app',
    components: { Toolbar },
    computed: {
      ...mapGetters('user', {
        profile: 'profile',
        loggedIn: 'loggedIn'
      })
    },
    methods: {
      ...mapActions('user', 
      {
        test: 'test',
        login: 'login'
      })
    }
  };
</script>
