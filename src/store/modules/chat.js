import axios from "axios";

export default {
  state: {
    messages: [],
    room: "",
    socket: [],
    showChatMobile: 0,
    typing: {},
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
    setShowChatMobile(state) {
      state.showChatMobile === 0
        ? (state.showChatMobile = 1)
        : (state.showChatMobile = 0);
      console.log("ini show chat mobile " + state.showChatMobile);
    },
    pushTyping(state, payload) {
      state.typing = payload;
    },
  },
  actions: {
    getChatByRoom(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/chat/get`, payload)
          .then((result) => {
            context.commit("setMessages", result.data.data);
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
          .post(`${process.env.VUE_APP_ROOT_URL}/chat/post`, payload)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
    createRoom(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/chat/create/room`, payload)
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
    getRoom(state) {
      return state.room;
    },
    getSocket(state) {
      return state.socket;
    },
    getShowChatMobile(state) {
      return state.showChatMobile;
    },
    getTyping(state) {
      return state.typing;
    },
  },
};
