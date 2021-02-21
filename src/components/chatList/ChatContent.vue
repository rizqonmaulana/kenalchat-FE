<template>
  <div>
    <!-- <div v-if="room === ''" class="no-conversation text-center">
      <p class="text-grey no-chat">Please select a chat to start messaging</p>
    </div> -->
    <div class="conversation">
      <div
        v-b-modal.friendProfile
        class="header d-flex align-items-center py-3"
      >
        <div class="d-img">
          <img
            :src="
              receiver.user_pic === null
                ? 'http://localhost:3000/user/icon-user.png'
                : 'http://localhost:3000/user/' + receiver.user_pic
            "
            class="profile-img rounded-circle"
          />
        </div>
        <div class="d-name">
          <p class="text-black text-name">{{ receiver.user_name }}</p>
          <p class="text-blue text-status">Online</p>
        </div>
        <div class="d-menu">
          <img src="../../assets/icon-profilemenu.png" />
        </div>
      </div>
      <!-- modal friend profile -->
      <b-modal id="friendProfile" hide-header hide-footer>
        <div class="p-3 text-center">
          <img
            :src="
              receiver.user_pic === null
                ? 'http://localhost:3000/user/icon-user.png'
                : 'http://localhost:3000/user/' + receiver.user_pic
            "
            class="profile-img-modal rounded-circle"
          />
          <p class="text-black mt-2">
            <strong>{{ receiver.user_name }}</strong>
          </p>
          <p class="text-black mt-3">
            Bio
          </p>
          <p class="text-grey mt-2">
            {{ receiver.user_bio }}
          </p>
          <p class="text-black mt-3">
            Email
          </p>
          <p class="text-grey mt-2">
            {{ receiver.user_email }}
          </p>
          <p class="text-black mt-3">
            Phone number
          </p>
          <p class="text-grey mt-2">
            {{ receiver.user_phone }}
          </p>
          <div class="map text-center mt-3">
            <GmapMap
              :center="{
                lat: parseFloat(receiver.user_lat),
                lng: parseFloat(receiver.user_lng),
              }"
              :zoom="10"
              map-type-id="terrain"
              style="width: 100%; height: 180px"
            >
              <GmapMarker
                :position="{
                  lat: parseFloat(receiver.user_lat),
                  lng: parseFloat(receiver.user_lng),
                }"
                :clickable="true"
                :draggable="true"
                @click="clickMarker"
                icon="https://img.icons8.com/color/48/000000/map-pin.png"
              />
            </GmapMap>
            {{ receiver.user_lat }}
            {{ receiver.user_lng }}
          </div>
        </div>
      </b-modal>

      <div class="msg-content" id="msg-content">
        <!--  -->
        <div
          v-for="(item, index) in chat"
          :key="index"
          class="d-flex justify-content-between my-2 mx-2"
        >
          <div v-if="getUser.userId === item.user_id_to" class="left">
            <div class="d-flex flex-row align-items-end">
              <div class="img mr-2">
                <img
                  :src="
                    item.user_pic === null
                      ? 'http://localhost:3000/user/icon-user.png'
                      : 'http://localhost:3000/user/' + receiver.user_pic
                  "
                  class="profile-img-chat rounded-circle"
                />
              </div>
              <div class="msg">
                <p class="text-white">{{ item.chat_content }}</p>
              </div>
            </div>
          </div>
          <div v-else class="right"></div>

          <div v-if="getUser.userId === item.user_id_to" class="left"></div>
          <div v-else class="right">
            <div class="right">
              <div class="d-flex flex-row align-items-end">
                <div class="msg">
                  <p class="text-black">{{ item.chat_content }}</p>
                </div>
                <div class="img ml-2">
                  <img
                    :src="
                      item.user_pic === null
                        ? 'http://localhost:3000/user/icon-user.png'
                        : 'http://localhost:3000/user/' + item.user_pic
                    "
                    class="profile-img-chat rounded-circle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          v-if="typing.isTyping && typing.username !== getUser.userName"
          class="typing-text ml-2"
        >
          <em>{{ typing.username }} is typing a message ...</em>
        </p>

        <!--  -->
      </div>
      <div class="msg-bar py-2">
        <div class="input-msg">
          <div class="d-flex justify-content-between align-items-center">
            <div class="msg">
              <input
                v-model="message"
                v-on:keyup.enter="sendMessage"
                type="text"
                placeholder="Type your message..."
              />
            </div>
            <div class="icon text-center">
              <img src="../../assets/icon-plus.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      message: "",
      messages: [],
      oldRoom: "",
      socket: io("http://localhost:3000"),
      coordinate: {
        lat: 10,
        lng: 10,
      },
    };
  },
  computed: {
    ...mapGetters({
      getUser: "getUser",
      userDetail: "getUserDetail",
      chat: "getChatByRoom",
      receiver: "getUserReceiver",
      getSocket: "getSocket",
      room: "getRoom",
      typing: "getTyping",
    }),
  },
  watch: {
    message(value) {
      value
        ? this.socket.emit("typing", {
            username: this.getUser.userName,
            room: this.room,
            isTyping: true,
          })
        : this.socket.emit("typing", {
            room: this.room,
            isTyping: false,
          });
    },
  },
  created() {
    this.$getLocation()
      .then((coordinates) => {
        this.coordinate = {
          lat: coordinates.lat,
          lng: coordinates.lng,
        };
      })
      .catch((error) => {
        alert(error);
      });

    this.socket.on("typingMessage", (data) => {
      this.typing = data;
    });
  },
  methods: {
    ...mapActions(["postChat", "getRoom"]),
    sendMessage() {
      if (!this.message) {
        return;
      }
      this.getRoom(this.getUser.userId);
      const setData = {
        userIdFrom: this.getUser.userId,
        userIdTo: this.receiver.user_id,
        chatContent: this.message,
        roomId: this.getSocket.room_id,
      };

      const data = {
        user_id_from: this.getSocket.user_1,
        user_id_to: this.getSocket.user_2,
        user_pic: this.getSocket.user_pic,
        chat_content: this.message,
        room_id: this.getSocket.room_id,
      };
      console.log("ini data ke socket.io");
      console.log(data);
      // [1] menjalankan socket io untuk mendapatkan realtimenya
      this.socket.emit("roomMessage", data);
      this.postChat(setData);
      // [2] menjalankan proses axios post data ke table chat
      // this.postMessage(setData);
      this.message = "";
    },
    clickMarker(position) {
      this.coordinate = {
        lat: position.latLng.lat(),
        lng: position.latLng.lng(),
      };
    },
    scroll() {
      document.getElementById(
        "msg-content"
      ).scrollTop = document.getElementById("msg-content").scrollHeight;
    },
  },
  updated() {
    this.scroll();
  },
};
</script>

<style scoped>
.no-chat {
  margin-top: 40%;
}

.header {
  height: 10vh;
}

.header:focus {
  outline: none !important;
}

.msg-content {
  height: 80vh;
  background-color: #fafafa;
  border-radius: 10px;
  overflow: auto;
}

.msg-bar {
  height: 10vh;
}

p {
  margin-bottom: unset;
}

.profile-img {
  width: 45px;
  height: 45px;
}

.d-img {
  width: 8%;
}

.d-name {
  width: 88%;
}

.d-menu {
  width: 4%;
}

.d-menu img {
  width: 20px;
}

.text-name {
  font-weight: 500;
}

.text-status {
  font-size: 13px;
}

.msg-bar {
  padding: 20px 0px;
  background-color: #fff;
  width: 100%;
  padding-right: -15px !important;
  padding-left: -15px !important;
}

.input-msg {
  background-color: #fafafa;
  padding: 10px;
  border-radius: 10px;
}

.input-msg img {
  width: 20px;
}

.input-msg .msg {
  width: 97%;
}

.input-msg .icon {
  width: 3%;
  margin-left: 5px;
}

input {
  border: unset;
  font-size: 14px;
  color: #7d7d7d;
  width: 100%;
  background: #fafafa;
}

.msg-content .profile-img-chat {
  width: 35px;
  height: 35px;
}

.msg-content .left .msg {
  background-color: #7e98df;
  border-radius: 20px 20px 20px 3px;
  padding: 8px 15px;
  font-size: 14px;
  max-width: 40vw;
}

.msg-content .right .msg {
  background-color: #fff;
  border-radius: 20px 20px 3px 20px;
  padding: 8px 15px;
  font-size: 14px;
  max-width: 40vw;
}

.profile-img-modal {
  width: 100px;
  height: 100px;
}

.typing-text {
  font-size: 14px;
  color: rgb(169, 169, 169);
}

@media (max-width: 992px) {
  .d-name {
    margin-left: 40px;
  }
}
</style>
