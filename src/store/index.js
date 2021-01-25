import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/auth";
import Friend from "./modules/friend";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Auth, Friend },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      paths: ["Auth.user"],
    }),
  ],
});
