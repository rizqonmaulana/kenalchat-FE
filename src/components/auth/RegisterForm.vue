<template>
  <div>
    <b-container class="main">
      <b-row>
        <b-col col lg="3" md="3" sm="2" cols="0"> </b-col>
        <b-col col lg="6" sm="8" cols="12">
          <div class="login-card">
            <div class="header mb-3">
              <span class="text-center text-header-blue mb-4">
                <img src="../../assets/icon-back.png" />
              </span>
              <span class="text-center register-text text-header-blue mb-4">
                Register
              </span>
            </div>
            <p class="text text-black">Let's create your account!</p>
            <label class="text text-grey">
              Name
            </label>
            <input
              class="input-border-bot mb-4"
              type="text"
              name="name"
              autocomplete="off"
            />
            <br />
            <label class="text text-grey">
              Email
            </label>
            <input
              class="input-border-bot mb-4"
              type="email"
              name="email"
              autocomplete="off"
            />
            <br />
            <label class="text text-grey">
              Password
            </label>
            <input class="input-border-bot" type="password" name="password" />
            <button class="button btn-blue mb-3 mt-4">
              Register
            </button>
            <div class="d-flex justify-content-between">
              <div>
                <hr />
              </div>
              <div><p class="text text-grey mt-1">Register with</p></div>
              <div>
                <hr />
              </div>
            </div>
            <button class="button btn-white mb-3">
              Google
            </button>
          </div>
        </b-col>
        <b-col col lg="3" md="3" sm="2" cols="0"> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.main {
  padding: 0px 200px;
}

.login-card {
  background-color: #fff;
  margin-top: 25px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.34);
  padding: 50px 40px;
}

input {
  width: 100%;
}

.button {
  width: 100%;
}

label {
  margin-bottom: unset;
}

hr {
  width: 80px;
  border: 1px solid rgb(223, 223, 223);
}

.register-text {
  margin-left: 29%;
}

@media (max-width: 1200px) {
  .main {
    padding: 0px 80px;
  }
}
@media (max-width: 992px) {
  .main {
    padding: 0px 50px;
  }
}
@media (max-width: 768px) {
  .main {
    padding: 0px 50px;
  }
}
@media (max-width: 576px) {
  .main {
    padding: 0px 100px;
  }
}
@media (max-width: 414px) {
  .main {
    padding: 0px 40px;
  }
}
</style>
