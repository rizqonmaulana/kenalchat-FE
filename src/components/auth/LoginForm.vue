<template>
  <div>
    <b-container class="main">
      <b-row>
        <b-col col lg="3" md="3" sm="2" cols="0"> </b-col>
        <b-col col lg="6" sm="8" cols="12">
          <div class="login-card">
            <h5 class="text-center text-header-blue mb-4">
              Login
            </h5>
            <p class="text text-black">Hi, Welcome back!</p>
            <label class="text text-grey">
              Email
            </label>
            <input
              v-model="form.userEmail"
              class="input-border-bot mb-4"
              type="email"
              name="email"
              autocomplete="off"
            />
            <br />
            <label class="text text-grey">
              Password
            </label>
            <input
              v-model="form.userPassword"
              class="input-border-bot"
              type="password"
              name="password"
            />
            <router-link to="/forgot">
              <p class="text-right text-blue mt-4">Forgot password ?</p>
            </router-link>
            <button @click="loginUser" class="button btn-blue my-3">
              Login
            </button>
            <div class="d-flex justify-content-between">
              <div>
                <hr />
              </div>
              <div><p class="text text-grey mt-1">login with</p></div>
              <div>
                <hr />
              </div>
            </div>
            <button class="button btn-white mb-3">
              Google
            </button>
            <p class="text-center text text-black">
              Don't have an account ?
              <router-link to="/register">
                <span class="text text-blue pointer">Sign Up</span>
              </router-link>
            </p>
          </div>
        </b-col>
        <b-col col lg="3" md="3" sm="2" cols="0"> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { alert } from "../../mixins/alert";

export default {
  mixins: [alert],
  data() {
    return {
      form: {
        userEmail: "",
        userPassword: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      this.login(this.form)
        .then((result) => {
          this.successAlert(result.data.msg);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errorAlert(error.data.msg);
        });
    },
  },
};
</script>

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
