import axios from "axios";
// import router from "../../router/index";

export default {
  state: {
    register: {},
    user: {},
    token: localStorage.getItem("token") || null,
    VUE_APP_ROOT_URL: "http://localhost:3000",
  },
  mutations: {
    setRegister(state, payload) {
      state.register = payload;
    },
    setUser(state, payload) {
      state.user = payload;
      state.token = payload.token;
    },
  },
  actions: {
    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.VUE_APP_ROOT_URL}/user/register`, payload)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.VUE_APP_ROOT_URL}/user/login`, payload)
          .then((result) => {
            context.commit("setUser", result.data.data);
            localStorage.setItem("token", result.data.data.token);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
  },
  getters: {
    isLogin(state) {
      return state.token !== null;
    },
  },
};
