<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item router :to="{ name: 'home' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="isLogin" router :to="{ name: 'mypage' }" exact>
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>마이페이지</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-else router :to="{ name: 'login' }" exact>
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>로그인</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-list-item offset-y v-if="isLogin">
          <template v-slot:activator="{ on }">
            <v-btn icon dark v-on="on">
              <v-icon>view_headline</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title router :to="{ name: 'mypage' }"
                >마이페이지</v-list-item-title
              >
              <v-list-item-title @click="logout">로그아웃</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item>

        <v-btn text v-else router :to="{ name: 'login' }">로그인</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapActions(["logout"])
  }
};
</script>
