<template>
  <div>
    <button @click="activateAccount" class="btn btn-primary ml-1 mt-1">
      Active account
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { alert } from "../../mixins/alert";

export default {
  mixins: [alert],
  data() {
    return {
      key: this.$route.params.key,
    };
  },
  created() {},
  methods: {
    ...mapActions(["activeAccount"]),
    activateAccount() {
      this.activeAccount(this.key)
        .then((result) => {
          this.successAlert(result.data.msg);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errorAlert(error.data.msg);
        });
    },
  },
};
</script>
