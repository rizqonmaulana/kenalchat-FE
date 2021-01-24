import axios from "axios";

export default {
  state: {
    VUE_APP_ROOT_URL: "http://localhost:3000",
  },
  mutations: {},
  actions: {
    postFriend(context, payload) {
      console.log(payload);
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.VUE_APP_ROOT_URL}/friend/add`, payload)
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
