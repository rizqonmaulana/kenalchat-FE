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
                Forgot Password
              </span>
            </div>
            <p class="text text-black">
              You'll get messages soon on your e-mail
            </p>
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
            <button class="button btn-blue mb-3">
              Send
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
  padding: 0px 100px;
}

.login-card {
  background-color: #fff;
  margin-top: 125px;
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
  margin-left: 20%;
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
