<template>
  <v-container fill-height style="max-width:450px;">
    <v-layout align-center wrap>
      <v-flex xs12>
        <v-alert :value="isLoginError" type="error"
          >아이디와 비밀번호를 확인해주세요.</v-alert
        >
        <v-alert :value="isLogin" type="success"
          >로그인이 완료되었습니다.</v-alert
        >
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="이메일"></v-text-field>
            <v-text-field
              :type="'password'"
              v-model="password"
              label="비밀번호"
            ></v-text-field>
            <v-btn
              block
              depressed
              large
              color="primary"
              @click="
                login({
                  email,
                  password
                })
              "
              >로그인</v-btn
            >
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"])
    // login() {
    // // 전체 유저에서 해당 이메일로 유저를 찾는다.
    // let selectedUser = null;
    // this.allUsers.forEach(user => {
    //   if (this.email === user.email) selectedUser = user;
    // });
    // if (selectedUser === null) {
    //   //alert("입력하신 이메일이 존재하지 않습니다");
    //   this.isError = true;
    //   this.loginSuccess = false;
    // } else {
    //   if (this.password !== selectedUser.password) {
    //     this.isError = true;
    //     this.loginSuccess = false;
    //   } else {
    //     this.isError = false;
    //     this.loginSuccess = true;
    //   }
    // }

    //console.log(this.email, this.password);
    //}
  }
};
</script>

<style lang="scss" scoped></style>
