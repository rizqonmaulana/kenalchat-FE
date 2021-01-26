import axios from "axios";

export default {
  state: {
    register: {},
    user: {},
    userDetail: {},
    userReceiver: {},
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
    setUserDetail(state, payload) {
      state.userDetail = payload;
    },
    setUserReceiver(state, payload) {
      state.userReceiver = payload;
    },
    delUser(state) {
      state.user = {};
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
    logout(context) {
      localStorage.removeItem("token");
      context.commit("delUser");
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
    patchPassword(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.VUE_APP_ROOT_URL}/user/change/password`,
            payload
          )
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    patchUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${context.state.VUE_APP_ROOT_URL}/user/change/profile`,
            payload
          )
          .then((result) => {
            context.commit("setUserDetail", result.data.data);

            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    getUserByEmail(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/user/${payload}`)
          .then((result) => {
            context.commit("setUserDetail", result.data.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    getUserReceiver(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/user/${payload}`)
          .then((result) => {
            context.commit("setUserReceiver", result.data.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    activeAccount(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${context.state.VUE_APP_ROOT_URL}/user/active/${payload}`)
          .then((result) => {
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
    getUser(state) {
      return state.user;
    },
    getUserDetail(state) {
      return state.userDetail[0];
    },
    getUserReceiver(state) {
      return state.userReceiver[0];
    },
  },
};
