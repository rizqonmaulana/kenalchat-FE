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
            <img @click="showMenu" src="../../assets/icon-menu.png" />
            <div
              v-if="showSetting !== 0"
              class="setting-menu position-absolute"
            >
              <div
                v-b-modal.contact
                class="d-flex align-items-center my-2 menu-option"
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
                class="d-flex align-items-center my-2 menu-option"
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
                class="d-flex align-items-center my-2 menu-option"
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
            </div>
          </div>
        </div>
        <div v-else class="d-flex flex-row">
          <div @click="showProfile" style="width:5%;">
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
              src="../../assets/img-profile1.png"
              class="profile-img rounded-circle mt-2"
            />
          </div>
          <h5 class="text-black mt-2 text-profile-name">
            Rizqon Maulana
          </h5>
          <p class="text-grey text-username">
            @rizqonmaulana
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
      <!-- contact list -->
      <div v-if="profile !== 1" class="contact-list">
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile6.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Theresa Webb</p>
            <p class="text-blue chat-content">why u did it?</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">15:20</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">5</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile6.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Theresa Webb</p>
            <p class="text-blue chat-content">why u did it?</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">15:20</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">5</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile6.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Theresa Webb</p>
            <p class="text-blue chat-content">why u did it?</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">15:20</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">5</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile6.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Theresa Webb</p>
            <p class="text-blue chat-content">why u did it?</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">15:20</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">5</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile6.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Theresa Webb</p>
            <p class="text-blue chat-content">why u did it?</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">15:20</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">5</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile6.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Theresa Webb</p>
            <p class="text-blue chat-content">why u did it?</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">15:20</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">5</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile2.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">John Arm</p>
            <p class="text-blue chat-content">r u ok?</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">15:10</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">3</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile3.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Danny Granger</p>
            <p class="text-blue chat-content">it works bro</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">14:40</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">2</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile4.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Alfa</p>
            <p class="text-blue chat-content">When u come ?</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">14:20</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">1</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile5.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Derby Romeo</p>
            <p class="text-blue chat-content">whats up ?</p>
          </div>
          <div class="d-timetext-right mr-2">
            <p class="text-grey text-time">14:10</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">2</p>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between my-3">
          <div class="d-image">
            <img
              src="../../assets/img-profile6.png"
              class="profile-img rounded-circle"
            />
          </div>
          <div class="d-name">
            <p class="text-black chat-name">Nicole</p>
            <p class="text-blue chat-content">it's great</p>
          </div>
          <div class="d-time text-right mr-2">
            <p class="text-grey text-time">13:59</p>
            <div class="rounded-circle notif text-center ml-auto">
              <p class="text-notif">10</p>
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
              type="email"
              class="input-password"
              placeholder="Input user email"
            />
            <br />
            <button class="button btn-blue mt-3">
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
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
                <b-col col lg="2" md="4" sm="8" cols="12">
                  <div class="card-contact text-center mt-3">
                    <img
                      class="rounded-circle"
                      src="../../assets/img-profile2.png"
                    />
                    <p class="text-black my-2">Mother</p>
                    <button class="button btn-blue">Chat</button>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-modal>
      </div>
      <!-- profile -->
      <div v-else style="margin-top: -30px;">
        <h5 class="text-black">
          Account
        </h5>
        <p class="text text-black">
          +62898 8989 8989
        </p>
        <hr />
        <p class="text text-black">
          I'm senior software engineer from google
        </p>
        <p class="text text-grey mt-1">
          Bio
        </p>
        <h5 class="text-black mt-3 mb-2">Settings</h5>

        <div v-b-modal.profile class="d-flex flex-row align-items-center my-2 ">
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
        <div v-b-modal.my-modal class="d-flex flex-row align-items-center">
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

        <!-- change profile -->
        <b-modal id="profile" hide-header hide-footer>
          <div class="p-3">
            <label>Username</label>
            <br />
            <input
              type="text"
              class="input-password"
              placeholder="Input new username"
            />
            <br />
            <label class="mt-3">Phone number</label>
            <br />
            <input
              type="number"
              class="input-password"
              placeholder="Input new phone number"
            />
            <label class="mt-3">Bio</label>
            <br />
            <input
              type="text"
              class="input-password"
              placeholder="Input new bio"
            />
            <label class="mt-3">Profile picture</label>
            <br />
            <input type="file" class="input-password" />
            <button class="button btn-blue mt-3">
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
              type="password"
              class="input-password"
              placeholder="Input new password"
            />
            <br />
            <label class="mt-2">Confirm password</label>
            <br />
            <input
              type="password"
              class="input-password"
              placeholder="Input confirm password"
            />
            <button class="button btn-blue mt-3">
              Save
            </button>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSetting: 0,
      profile: 0,
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
p {
  margin-bottom: unset;
}

.head {
  height: 37vh;
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
  width: 150px;
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
}

.button,
.btn-blue {
  padding: 5px;
}
</style>
