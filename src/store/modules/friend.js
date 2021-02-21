import axios from "axios";

export default {
  state: {
    friendList: [],
    roomList: [],
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
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/friend/all`, payload)
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
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL}/chat/${payload}`)
          .then((result) => {
            context.commit("setRoom", result.data.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    postFriend(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/friend/add`, payload)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    deleteFriend(_context, payload) {
      console.log("mau hapus teman");
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/friend/delete`, payload)
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
