import axios from "axios";

export default {
  state: {
    messages: [],
    room: "",
    socket: [],
    userReceiver: {},
    VUE_APP_ROOT_URL: "http://localhost:3000",
  },
  mutations: {
    setMessages(state, payload) {
      state.messages = payload;
      state.room = payload[0].room_id;
    },
    setLiveMsg(state, payload) {
      state.messages.push(payload);
    },
    setSocket(state, payload) {
      state.socket = payload;
    },
    setUserReceiver(state, payload) {
      const data = {
        user_id_to: payload[0].user_id_to,
        user_id_from: payload[0].user_id_from,
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
            context.commit("setMessages", result.data.data);
            context.commit("setUserReceiver", result.data.data);
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    postChat(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${context.state.VUE_APP_ROOT_URL}/chat/post`, payload)
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
    getChatByRoom(state) {
      return state.messages;
    },
    getUserReceiver(state) {
      return state.userReceiver;
    },
    getRoom(state) {
      return state.room;
    },
    getSocket(state) {
      return state.socket;
    },
  },
};
