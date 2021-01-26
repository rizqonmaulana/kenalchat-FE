<template>
  <div></div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {},
  methods: {
    ...mapActions(["activeAccount"]),
    activeteAccount() {
      this.activeteAccount(this.$route.query.id);
      console.log(this.$route.query.id);
    },
  },
};
</script>
