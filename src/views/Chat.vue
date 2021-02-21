<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col
          col
          lg="3"
          md="4"
          sm="5"
          cols="5"
          style=" width: 100%;"
          class="d-none d-sm-block"
        >
          <ChatRoom />
        </b-col>
        <b-col
          col
          lg="9"
          md="8"
          sm="7"
          cols="7"
          style="width: 100%;"
          class="d-none d-sm-block"
        >
          <ChatContent />
        </b-col>
        <!-- mobile -->
        <b-col
          v-if="getShowChatMobile === 0"
          cols="12"
          class="d-block d-sm-none"
        >
          <ChatRoomMobile />
        </b-col>
        <b-col v-else cols="12" class="d-block d-sm-none">
          <ChatContentMobile />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import ChatRoom from "../components/chatList/ChatRoom";
import ChatContent from "../components/chatList/ChatContent";
import ChatRoomMobile from "../components/chatList/ChatRoomMobile";
import ChatContentMobile from "../components/chatList/ChatContentMobile";

export default {
  components: {
    ChatRoom,
    ChatContent,
    ChatRoomMobile,
    ChatContentMobile,
  },
  computed: {
    ...mapGetters(["getShowChatMobile"]),
  },
  methods: {
    ...mapMutations(["setShowChatMobile"]),
  },
};
</script>
