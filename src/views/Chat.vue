<template>
  <div>
    <b-container>
      <b-row>
        <b-col col lg="3" md="4" sm="5" cols="5" style=" width: 100%;">
          <ChatRoom
        /></b-col>
        <b-col col lg="9" md="8" sm="7" cols="7" style="width: 100%;">
          <ChatContent
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ChatRoom from "../components/chatList/ChatRoom";
import ChatContent from "../components/chatList/ChatContent";

export default {
  components: {
    ChatRoom,
    ChatContent,
  },
};
</script>
