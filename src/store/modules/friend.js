import axios from "axios";

export default {
  state: {
    friendList: [],
    roomList: [],
    VUE_APP_ROOT_URL: "http://localhost:3000",
  },
  mutations: {
    setFriendList(state, payload) {
      state.friendList = payload;
    },
    setRoom(state, payload) {
      state.roomList = payload;
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
    getRoom(context, payload) {
      console.log(payload);
      console.log("ini payload");
      return new Promise((resolve, reject) => {
        axios
          .get(`${context.state.VUE_APP_ROOT_URL}/chat/${payload}`)
          .then((result) => {
            context.commit("setRoom", result.data.data);
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
    getRoomList(state) {
      return state.roomList;
    },
  },
};
