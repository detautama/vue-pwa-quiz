<template functional>
  <v-toolbar app dark color="primary">
    <v-toolbar-title class="white--text ml-5">Vue PWA</v-toolbar-title>
    <v-spacer />
    <v-menu v-if="props.loggedIn" auto offset-y bottom>
      <v-avatar slot="activator">
        <img :src="props.profile.picture" />
      </v-avatar>
      <v-list>
        <v-list-tile @click="props.logout">
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn v-else @click="props.login" class="mr-5" flat>Login</v-btn>
    <v-btn @click="props.test">test</v-btn>
  </v-toolbar>
</template>
