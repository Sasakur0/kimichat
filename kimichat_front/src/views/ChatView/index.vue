<template>
  <div class="chat-view">
    <ChatWindow />
  </div>
</template>

<script>
import ChatWindow from "@/components/ChatWindow.vue"; // 引入聊天窗口组件

export default {
  components: {
    ChatWindow,
  },
};
</script>

<style>
.chat-view {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
}
</style>
