import axios from "axios";
// import router from "../../router/index";

export default {
  state: {
    register: {},
    VUE_APP_ROOT_URL: "http://localhost:3000",
  },
  mutations: {
    setRegister(state, payload) {
      state.register = payload;
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
  },
  getters: {},
};
