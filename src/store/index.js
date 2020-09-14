import { createStore } from "vuex";
export default createStore({
  state: {
    islogin: false,
  },
  mutations: {
    login(state) {
      state.islogin = true;
    },
    logout(state) {
      state.islogin = false;
    },
  },
  actions: {},
  modules: {},
});
