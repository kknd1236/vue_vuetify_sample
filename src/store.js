import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [
      {
        id: 1,
        email: "kknd1236@empal.com",
        password: "123456"
      }
    ],
    isLogin: false,
    isLoginError: false,
    userInfo: {}
  },
  mutations: {
    // 로그인이 성공 했을경우
    loginSuccess(state, selectedUser) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = selectedUser;
    },
    // 로그인시 실패 했을경우
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    }
  },
  actions: {
    //로그인 시도
    login({ state, commit }, loginObj) {
      //console.log(loginObj);

      let selectedUser = null;
      state.allUsers.forEach(user => {
        if (loginObj.email === user.email) selectedUser = user;
      });

      if (
        selectedUser === null ||
        loginObj.password !== selectedUser.password
      ) {
        commit("loginError");
      } else {
        commit("loginSuccess", selectedUser);
        router.push({
          name: "mypage"
        });
      }
    },
    logout({ commit }) {
      commit("logout");
      router.push({
        name: "home"
      });
    }
  }
});
