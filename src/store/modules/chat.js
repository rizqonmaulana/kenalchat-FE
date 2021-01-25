import axios from "axios";

export default {
  state: {
    messages: [],
    room: "",
    userReceiver: {},
    VUE_APP_ROOT_URL: "http://localhost:3000",
  },
  mutations: {
    setMessages(state, payload) {
      state.messages = payload;
      state.room = payload[0].room_id;
    },
    setUserReceiver(state, payload) {
      const data = {
        user_id: payload[0].user_id,
        user_name: payload[0].user_name,
        user_pic: payload[0].user_pic,
        user_email: payload[0].user_email,
        user_phone: payload[0].user_phone,
        user_bio: payload[0].user_bio,
      };
      state.userReceiver = data;
    },
  },
  actions: {
    getChatByRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.VUE_APP_ROOT_URL}/chat/get`, payload)
          .then((result) => {
            console.log(result);
            context.commit("setMessages", result.data.data);
            context.commit("setUserReceiver", result.data.data);
            resolve(result);
          })
          .catch((error) => {
            console.log(error);
            reject(error.response);
          });
      });
    },
    postChat(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.VUE_APP_ROOT_URL}/chat/post`, payload)
          .then((result) => {
            console.log(result);
            resolve(result);
          })
          .catch((error) => {
            console.log(error);
            reject(error.response);
          });
      });
    },
  },
  getters: {
    getChatByRoom(state) {
      return state.messages;
    },
    getUserReceiver(state) {
      return state.userReceiver;
    },
    getRoom(state) {
      return state.room;
    },
  },
};
