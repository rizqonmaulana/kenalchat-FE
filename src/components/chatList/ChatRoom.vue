<template>
  <div>
    <div class="card-room pt-3">
      <!-- head -->
      <div class="head">
        <div v-if="profile !== 1" class="d-flex justify-content-between">
          <div>
            <h5 class="text-blue">
              Kenal
            </h5>
          </div>
          <div>
            <img
              class="pointer"
              @click="showMenu"
              src="../../assets/icon-menu.png"
            />
            <div
              v-if="showSetting !== 0"
              class="setting-menu position-absolute"
            >
              <div
                v-b-modal.contact
                class="d-flex  hide-outline align-items-center my-2 menu-option"
              >
                <div class="setting-icon text-right mr-2">
                  <img src="../../assets/icon-contact.png" />
                </div>
                <div>
                  <p class="text-white">
                    Contacts
                  </p>
                </div>
              </div>
              <div
                v-b-modal.addFriend
                class="d-flex   hide-outline align-items-center my-2 menu-option"
              >
                <div class="setting-icon text-right mr-2">
                  <img
                    src="../../assets/icon-addfriend.png"
                    style="height: 16px; width: 22px; margin-left: -7px;"
                  />
                </div>
                <div>
                  <p class="text-white">
                    Invite Friend
                  </p>
                </div>
              </div>
              <div
                @click="showProfileAndCloseMenu"
                class="d-flex align-items-center my-2 menu-option pointer"
              >
                <div class="setting-icon text-right mr-2">
                  <img src="../../assets/icon-setting.png" />
                </div>
                <div>
                  <p class="text-white">
                    Setting
                  </p>
                </div>
              </div>
              <router-link to="Login">
                <div class="d-flex align-items-center my-2 menu-option">
                  <div class="setting-icon text-right mr-2">
                    <img src="../../assets/icon-faq.png" />
                  </div>
                  <div>
                    <p class="text-white">
                      Kenal FAQ
                    </p>
                  </div>
                </div>
              </router-link>
              <div
                @click="handleLogout"
                class="d-flex align-items-center my-2 menu-option pointer"
              >
                <div class="setting-icon text-right mr-2">
                  <img src="../../assets/icon-faq.png" />
                </div>
                <div>
                  <p class="text-white">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="d-flex flex-row">
          <div @click="showProfile" class="pointer" style="width:5%;">
            <img src="../../assets/icon-back.png" />
          </div>
          <div class="text-center" style="width:95%;">
            <h5 class="text-blue mr-2">
              Kenal
            </h5>
          </div>
        </div>
        <div class="text-center">
          <div class="img">
            <img
              @click="showProfile"
              :src="
                getUserDetail.user_pic === null
                  ? url + 'user/icon-user.png'
                  : url + 'user/' + getUserDetail.user_pic
              "
              class="profile-img rounded-circle mt-2 pointer"
            />
          </div>
          <h5 class="text-black mt-2 text-profile-name">
            {{ getUserDetail.user_name }}
          </h5>
          <p class="text-grey text-username">
            {{ getUserDetail.user_email }}
          </p>
        </div>
        <div
          v-if="profile !== 1"
          class="d-flex justify-content-between align-items-center mt-3"
        >
          <div>
            <div class="input-border">
              <span><img src="../../assets/icon-search.png"/></span>
              <span
                ><input
                  class="ml-2"
                  type="text"
                  placeholder="Type your message..."
              /></span>
            </div>
          </div>
          <div>
            <img src="../../assets/icon-plus.png" />
          </div>
        </div>
      </div>
      <!-- room list -->
      <div v-if="profile !== 1" class="contact-list" style="margin-top: -50px;">
        <div
          v-for="(item, index) in getRoomList"
          :key="index"
          class="d-flex justify-content-between my-3 pointer"
          @click="
            selectRoom(item);
            getUserReceiver(item.user_email);
            reGetRoom();
          "
        >
          <div class="d-image">
            <img
              :src="
                item.user_pic === null
                  ? url + 'user/icon-user.png'
                  : url + 'user/' + item.user_pic
              "
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">{{ item.user_name }}</p>
            <p v-if="item.lastChat" class="text-blue chat-content">
              {{ item.lastChat.chat_content.slice(0, 30) }}
              {{ item.lastChat.chat_content.length >= 30 ? "..." : "" }}
            </p>
          </div>
          <div class="d-time text-right mr-2">
            <p v-if="item.lastChat" class="text-grey text-time">
              {{ formatTime(item.lastChat.chat_created_at) }}
            </p>
            <div
              v-if="item.unreadmessage[0].total > 0"
              class="rounded-circle notif text-center ml-auto"
            >
              <p class="text-notif">{{ item.unreadmessage[0].total }}</p>
            </div>
          </div>
        </div>
        <!-- invite friend modal-->
        <b-modal id="addFriend" hide-header hide-footer>
          <div class="p-3">
            <h5 class="text-blue">
              Add friend
            </h5>
            <label>User email</label>
            <br />
            <input
              v-model="formFriend.friendEmail"
              type="email"
              class="input-password"
              placeholder="Input user email"
            />
            <br />
            <button @click="addFriend" class="button btn-blue mt-3">
              Add
            </button>
          </div>
        </b-modal>

        <!-- contact modal -->
        <b-modal id="contact" size="xl" hide-header hide-footer>
          <div class="p-3">
            <h5 class="text-blue">My contact</h5>
            <b-container>
              <b-row>
                <b-col
                  v-for="(item, index) in getFriendList"
                  :key="index"
                  col
                  lg="2"
                  md="4"
                  sm="8"
                  cols="12"
                >
                  <div class="card-contact text-center mt-3">
                    <div class="position-absolute">
                      <img
                        @click="delFriend(item.user_friend_id)"
                        src="../../assets/icon-delete.png"
                        class="del-icon"
                      />
                    </div>
                    <img
                      :src="
                        item.user_pic === null
                          ? url + 'user/icon-user.png'
                          : url + 'user/' + item.user_pic
                      "
                      class="profile-img rounded-circle"
                    />
                    <p class="text-black my-2">{{ item.user_name }}</p>
                    <button
                      class="button btn-blue"
                      @click="
                        startChat(item.user_friend_id);
                        getUserReceiver(item.user_email);
                      "
                    >
                      Chat
                    </button>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-modal>
      </div>
      <!-- profile -->
      <div v-else style="margin-top: -80px;">
        <h5 class="text-black">
          Account
        </h5>
        <p class="text text-black">
          {{ getUserDetail.user_phone }}
        </p>
        <hr />
        <p class="text text-black">
          {{ getUserDetail.user_bio }}
        </p>
        <p class="text text-grey mt-1">
          Bio
        </p>
        <h5 class="text-black mt-3 mb-2">Settings</h5>

        <div
          v-b-modal.profile
          class="d-flex  hide-outline flex-row align-items-center my-3 "
        >
          <div class="setting-icon text-center">
            <img src="../../assets/icon-profile.png" />
          </div>
          <div class="setting-name">
            <p class="text text-blue">Change Profile</p>
          </div>
          <div class="setting-icon2">
            <img src="../../assets/icon-back.png" />
          </div>
        </div>
        <div
          v-b-modal.my-modal
          class="d-flex hide-outline flex-row align-items-center mb-3"
        >
          <div class="setting-icon text-center">
            <img src="../../assets/icon-lock.png" />
          </div>
          <div class="setting-name">
            <p class="text text-blue">Change Password</p>
          </div>
          <div class="setting-icon2">
            <img src="../../assets/icon-back.png" />
          </div>
        </div>
        <div class="map py-2">
          <GmapMap
            :center="coordinate"
            :zoom="10"
            map-type-id="terrain"
            style="width: 100%; height: 180px"
          >
            <GmapMarker
              :position="coordinate"
              :clickable="true"
              :draggable="true"
              @click="clickMarker"
              icon="https://img.icons8.com/color/48/000000/map-pin.png"
            />
          </GmapMap>
        </div>

        <!-- change profile -->
        <b-modal
          id="profile"
          @show="getExistData"
          @hidden="getNewData"
          hide-header
          hide-footer
        >
          <div class="p-3">
            <label>Username</label>
            <br />
            <input
              v-model="formUser.userName"
              type="text"
              class="input-password"
              placeholder="Input new username"
            />
            <br />
            <label class="mt-3">Phone number</label>
            <br />
            <input
              v-model="formUser.userPhone"
              type="number"
              class="input-password"
              placeholder="Input new phone number"
            />
            <label class="mt-3">Bio</label>
            <br />
            <input
              v-model="formUser.userBio"
              type="text"
              class="input-password"
              placeholder="Input new bio"
            />
            <label class="mt-3">Profile picture</label>
            <br />
            <input type="file" @change="handleFile" class="input-password" />
            <button @click="updateUser" class="button btn-blue mt-3">
              Save
            </button>
          </div>
        </b-modal>

        <!-- change password modal -->
        <b-modal title="Change Password" id="my-modal" hide-header hide-footer>
          <div class="p-3">
            <label>New password</label>
            <br />
            <input
              v-model="formPassword.userPassword"
              type="password"
              class="input-password"
              placeholder="Input new password"
            />
            <br />
            <label class="mt-2">Confirm password</label>
            <br />
            <input
              v-model="formPassword.userConfirmPassword"
              type="password"
              class="input-password"
              placeholder="Input confirm password"
            />
            <button @click="updatePassword" class="button btn-blue mt-3">
              Save
            </button>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { alert } from "../../mixins/alert";
import moment from "moment";

export default {
  mixins: [alert],
  data() {
    return {
      showSetting: 0,
      profile: 0,
      coordinate: {
        lat: 10,
        lng: 10,
      },
      formPassword: {
        userPassword: "",
        userConfirmPassword: "",
      },
      formFriend: {
        friendEmail: "",
      },
      formUser: {
        userName: "",
        userPhone: "",
        userBio: "",
        userPic: "",
      },
      socket: io(process.env.VUE_APP_ROOT_URL_SOCKET, {
        path: "/apikenal/socket.io",
      }),
      room: "",
      oldRoom: "",
      url: process.env.VUE_APP_ROOT_URL_IMAGE,
    };
  },
  computed: {
    ...mapGetters([
      "getUser",
      "getUserDetail",
      "getFriendList",
      "getRoomList",
      "getRoom",
    ]),
  },
  // watch: {
  // getRoomList() {
  //   this.getRoom(this.getUser.userId);
  // },
  // },
  created() {
    this.socket.on("chatMessage", (data) => {
      console.log(data);
      if (data.chat_content) {
        this.setLiveMsg(data);
      } else if (data.notif) {
        this.$toasted.success("New message from " + data.username, {
          duration: 1000,
        });
        this.getRoom(this.getUser.userId);
      }
    });

    this.socket.emit("joinRoom", {
      username: this.getUser.userName,
      room: this.getUser.userId,
    });

    this.getContact();

    this.getUserByEmail(this.getUser.userEmail);

    this.getRoom(this.getUser.userId);

    this.socket.on("typingMessage", (data) => {
      this.pushTyping(data);
    });

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

    this.$getLocation()
      .then((coordinates) => {
        if (coordinates.accuracy <= 300) {
          const data = {
            userEmail: this.getUser.userEmail,
            userLat: coordinates.lat,
            userLng: coordinates.lng,
          };
          this.patchUser(data);
        }
      })
      .catch((error) => {
        alert(error);
      });
  },
  methods: {
    ...mapActions([
      "patchPassword",
      "getUserByEmail",
      "patchUser",
      "postFriend",
      "getFriend",
      "getUserByEmail",
      "getRoom",
      "getChatByRoom",
      "getUserReceiver",
      "logout",
      "deleteFriend",
      "createRoom",
    ]),
    ...mapMutations(["setLiveMsg", "setSocket", "pushTyping", "setRoom"]),
    show() {
      console.log(this.getUser);
    },
    showMenu() {
      this.showSetting === 0 ? (this.showSetting = 1) : (this.showSetting = 0);
    },
    showProfile() {
      this.profile === 0 ? (this.profile = 1) : (this.profile = 0);
    },
    showProfileAndCloseMenu() {
      this.profile = 1;
      this.showSetting = 0;
    },
    clickMarker(position) {
      this.coordinate = {
        lat: position.latLng.lat(),
        lng: position.latLng.lng(),
      };
    },
    updatePassword() {
      const userEmail = this.getUser.userEmail;
      const setData = {
        userEmail,
        ...this.formPassword,
      };
      this.patchPassword(setData)
        .then((result) => {
          this.successAlert(result.data.msg);
        })
        .catch((error) => {
          this.errorAlert(error.data.msg);
        });
    },
    addFriend() {
      const userId = this.getUser.userId;
      const setData = {
        userId,
        ...this.formFriend,
      };
      this.postFriend(setData)
        .then((result) => {
          this.getContact();
          this.successAlert(result.data.msg);
        })
        .catch((error) => {
          this.errorAlert(error.data.msg);
        });
    },
    delFriend(friendId) {
      if (confirm("Are you sure want to remove this friend ?")) {
        const data = {
          userId: this.getUser.userId,
          friendId: friendId,
        };
        this.deleteFriend(data)
          .then((result) => {
            this.getContact();
            this.successAlert(result.data.msg);
          })
          .catch((error) => {
            this.errorAlert(error.data.msg);
          });
      }
    },
    getContact() {
      const id = this.getUser.userId;
      const data = {
        userId: id,
      };
      this.getFriend(data);
    },
    handleFile(event) {
      this.formUser.userPic = event.target.files[0];
    },
    updateUser() {
      const { userName, userPhone, userBio, userPic } = this.formUser;
      const userEmail = this.getUser.userEmail;

      const data = new FormData();
      data.append("userEmail", userEmail);
      data.append("userName", userName);
      data.append("userPhone", userPhone);
      data.append("userBio", userBio);
      data.append("userPic", userPic);

      this.patchUser(data)
        .then((result) => {
          this.successAlert(result.data.msg);
        })
        .catch((error) => {
          this.errorAlert(error.data.msg);
        });
    },
    formatTime(value) {
      moment.locale("ID");
      return moment(String(value)).format("LT");
    },
    getChat(room, id) {
      const setData = {
        roomId: room,
        userId: id,
      };
      this.getChatByRoom(setData).then((result) => {
        if (result.length > 0) {
          return result;
        } else {
          return [];
        }
      });
    },
    startChat(friendId) {
      const data = {
        userIdFrom: this.getUser.userId,
        userIdTo: friendId,
      };

      this.createRoom(data)
        .then((result) => {
          this.getRoom(this.getUser.userId);
          this.selectRoom(result.data.data);
        })
        .catch((error) => {
          this.errorAlert(error.data.msg);
        });
    },
    selectRoom(data) {
      if (this.oldRoom) {
        // console.log("sudah pernah masuk ke room " + this.oldRoom);
        // console.log("dan akan masuk ke room " + data.room_id);
        this.socket.emit("changeRoom", {
          room: data.room_id,
          oldRoom: this.oldRoom,
        });
        this.oldRoom = data.room_id;
      } else {
        // console.log("belum pernah masuk ke ruang manapun");
        // console.log("dan akan masuk ke room " + data);
        this.socket.emit("joinRoom", {
          room: data.room_id,
        });
        this.oldRoom = data.room_id;
      }
      const sendToSocket = {
        user_1: data.user_1,
        user_2: data.user_2,
        room_id: data.room_id,
        user_pic: this.getUserDetail.user_pic,
      };
      this.setRoom(data.room_id);
      this.setSocket(sendToSocket);
      this.getChat(data.room_id, data.user_1);
    },
    getNewData() {
      this.getUserByEmail(this.getUser.userEmail);
    },
    getExistData() {
      this.formUser.userName = this.getUserDetail.user_name;
      this.formUser.userPhone = this.getUserDetail.user_phone;
      this.formUser.userBio = this.getUserDetail.user_bio;
    },
    reGetRoom() {
      this.getRoom(this.getUser.userId);
    },
    handleLogout() {
      this.socket.emit("leaveRoom", {
        room: this.getUser.userId,
      });
      this.socket.emit("leaveRoom", {
        room: this.getRoom,
      });
      this.logout();
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: unset;
}

.head {
  min-height: 280px;
}
.contact-list {
  height: 58vh;
  overflow: auto;
}

.input-border {
  background-color: #fafafa;
  padding: 5px 15px;
  border-radius: 10px;
}

.text-profile-name {
  font-size: 18px;
}

.text-username {
  font-size: 14px;
}

input {
  border: unset;
  color: #848484;
  font-size: 14px;
  background: #fafafa;
  width: 80%;
}

.profile-img {
  height: 80px;
  width: 80px;
}

.contact-list img.profile-img {
  width: 40px;
  height: 40px;
}

.contact-list p {
  margin-bottom: unset;
}

.chat-name {
  font-size: 14px;
  font-weight: 500;
}

.chat-content {
  font-size: 13px;
}

.notif {
  width: 18px;
  height: 18px;
  background-color: #7e98df;
}

.text-time {
  font-size: 12px;
}

.text-notif {
  font-size: 12px;
  color: #fff;
}

.d-image {
  width: 25%;
}

.d-name {
  width: 70%;
}

.d-time {
  width: 15%;
}

.setting-menu {
  margin-left: -135px;
  background-color: #7e98df;
  padding: 10px 20px;
  border-radius: 20px 5px;
}

.setting-menu img {
  width: 15px;
}

.setting-menu p {
  font-size: 14px;
  margin-bottom: unset;
  text-decoration: unset;
}

.setting-icon {
  width: 25px;
  margin-right: 10px;
}

.setting-menu a {
  text-decoration: unset;
}

.menu-option {
  transition-duration: 0.8s;
}

.menu-option:hover {
  box-shadow: 0px 1px #fff;
}

.setting-icon {
  width: 10%;
}

.setting-name {
  width: 80%;
}

.setting-icon2 {
  width: 10%;
}

.setting-icon2 {
  transform: rotate(180deg);
}

.input-password {
  background: #fff;
  width: 100%;
  border-bottom: 1px solid rgb(182, 182, 182);
}

.input-password:focus {
  border-bottom: 1px solid #7e98df;
}

.btn-blue {
  width: 100%;
}

.card-contact {
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  padding: 10px 20px;
  border-radius: 20px;
  height: 180px;
}

.card-contact p {
  height: 45px;
}

.card-contact .profile-img {
  width: 60px;
  height: 60px;
}

.button,
.btn-blue {
  padding: 5px;
}

.hide-outline:focus {
  outline: none !important;
}

.del-icon {
  height: 20px;
  width: 20px;
  margin-left: -15px;
  margin-top: -15px;
  cursor: pointer;
}

@media (max-width: 768px) {
  input {
    width: 70%;
  }

  .d-image img.profile-img {
    margin-right: 5px;
  }
}
</style>
