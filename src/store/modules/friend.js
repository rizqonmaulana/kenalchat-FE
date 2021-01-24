import axios from "axios";

export default {
  state: {
    friendList: [],
    VUE_APP_ROOT_URL: "http://localhost:3000",
  },
  mutations: {
    setFriendList(state, payload) {
      state.friendList = payload;
    },
  },
  actions: {
    getFriend(context, payload) {
      console.log(payload);
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.VUE_APP_ROOT_URL}/friend/all`, payload)
          .then((result) => {
            context.commit("setFriendList", result.data.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    postFriend(context, payload) {
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
  getters: {
    getFriendList(state) {
      return state.friendList;
    },
  },
};
