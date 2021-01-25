import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/auth";
import Friend from "./modules/friend";
import Chat from "./modules/chat";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Auth, Friend, Chat },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      paths: ["Auth.user"],
    }),
  ],
});
