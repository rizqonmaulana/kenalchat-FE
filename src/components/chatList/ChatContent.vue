<template>
  <div>
    <div v-b-modal.friendProfile class="header d-flex align-items-center py-3">
      <div class="d-img">
        <img
          src="../../assets/img-profile2.png"
          class="rounded-circle profile-img"
        />
      </div>
      <div class="d-name">
        <p class="text-black text-name">Mother</p>
        <p class="text-blue text-status">Online</p>
      </div>
      <div class="d-menu">
        <img src="../../assets/icon-profilemenu.png" />
      </div>
    </div>
    <!-- modal friend profile -->
    <b-modal id="friendProfile" hide-header hide-footer>
      <div class="p-3 text-center">
        <img src="../../assets/img-profile2.png" class="circle-rounded" />
        <p class="text-black mt-2">Mother</p>
        <p class="text-black mt-3">
          Bio
        </p>
        <p class="text-grey mt-2">
          hiduplah meskipun tidak berguna
        </p>
        <p class="text-black mt-3">
          Email
        </p>
        <p class="text-grey mt-2">
          mother@mother.com
        </p>
        <p class="text-black mt-3">
          Phone number
        </p>
        <p class="text-grey mt-2">
          +628989 8989 8989
        </p>
        <div class="map text-center mt-3">
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
      </div>
    </b-modal>

    <div class="msg-content">
      <!--  -->
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end">
            <div class="img mr-2">
              <img
                src="../../assets/img-profile2.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
            <div class="msg">
              <p class="text-white">hallllooooooo</p>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end"></div>
        </div>
        <div class="right">
          <div class="d-flex flex-row align-items-end">
            <div class="msg">
              <p class="text-black">hallllooooooo</p>
            </div>
            <div class="img ml-2">
              <img
                src="../../assets/img-profile1.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end">
            <div class="img mr-2">
              <img
                src="../../assets/img-profile2.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
            <div class="msg">
              <p class="text-white">hallllooooooo</p>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end"></div>
        </div>
        <div class="right">
          <div class="d-flex flex-row align-items-end">
            <div class="msg">
              <p class="text-black">hallllooooooo</p>
            </div>
            <div class="img ml-2">
              <img
                src="../../assets/img-profile1.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end">
            <div class="img mr-2">
              <img
                src="../../assets/img-profile2.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
            <div class="msg">
              <p class="text-white">hallllooooooo</p>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end"></div>
        </div>
        <div class="right">
          <div class="d-flex flex-row align-items-end">
            <div class="msg">
              <p class="text-black">hallllooooooo</p>
            </div>
            <div class="img ml-2">
              <img
                src="../../assets/img-profile1.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end">
            <div class="img mr-2">
              <img
                src="../../assets/img-profile2.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
            <div class="msg">
              <p class="text-white">hallllooooooo</p>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end"></div>
        </div>
        <div class="right">
          <div class="d-flex flex-row align-items-end">
            <div class="msg">
              <p class="text-black">hallllooooooo</p>
            </div>
            <div class="img ml-2">
              <img
                src="../../assets/img-profile1.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end">
            <div class="img mr-2">
              <img
                src="../../assets/img-profile2.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
            <div class="msg">
              <p class="text-white">hallllooooooo</p>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end"></div>
        </div>
        <div class="right">
          <div class="d-flex flex-row align-items-end">
            <div class="msg">
              <p class="text-black">hallllooooooo</p>
            </div>
            <div class="img ml-2">
              <img
                src="../../assets/img-profile1.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end">
            <div class="img mr-2">
              <img
                src="../../assets/img-profile2.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
            <div class="msg">
              <p class="text-white">
                hallllooooooo hallllooooooo hallllooooooo hallllooooooo
                hallllooooooo vhallllooooooo hallllooooooo hallllooooooo
                hallllooooooo hallllooooooo
              </p>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="d-flex justify-content-between my-2 mx-2">
        <div class="left">
          <div class="d-flex flex-row align-items-end"></div>
        </div>
        <div class="right">
          <div class="d-flex flex-row align-items-end">
            <div class="msg">
              <p class="text-black">
                hallllooooooo hallllooooooo halllloooooooha llllooooooo
                hallllooooooo vhallllooooooo hallllooooooo hallllooooooo
                hallllooooooo hallllooooooo
              </p>
            </div>
            <div class="img ml-2">
              <img
                src="../../assets/img-profile1.png"
                class="rounded-circle profile-img-chat"
              />
            </div>
          </div>
        </div>
      </div>

      <!--  -->
    </div>
    <div class="msg-bar py-2">
      <div class="input-msg">
        <div class="d-flex justify-content-between align-items-center">
          <div class="msg">
            <input type="text" placeholder="Type your message..." />
          </div>
          <div class="icon text-center">
            <img src="../../assets/icon-plus.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coordinate: {
        lat: 10,
        lng: 10,
      },
    };
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
  },
  methods: {
    clickMarker(position) {
      this.coordinate = {
        lat: position.latLng.lat(),
        lng: position.latLng.lng(),
      };
    },
  },
};
</script>

<style scoped>
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
  border-radius: 30px 30px 30px 5px;
  padding: 15px;
  font-size: 14px;
  max-width: 40vw;
}

.msg-content .right .msg {
  background-color: #fff;
  border-radius: 30px 30px 5px 30px;
  padding: 15px;
  font-size: 14px;
  max-width: 40vw;
}

@media (max-width: 992px) {
  .d-name {
    margin-left: 40px;
  }
}
</style>
