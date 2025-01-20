<template>
  <div class="chat-window">
    <div class="header">
      <el-row type="flex" justify="center">
        <h2>ChatGPT</h2>
      </el-row>
    </div>
    <div class="messages">
      <div
          v-for="(msg, index) in messages"
          :key="index"
          class="message"
          :class="msg.type"
      >
        <p>{{ msg.text }}</p>
      </div>
    </div>
    <MessageInput @send="sendMessage" />
  </div>
</template>

<script>
import MessageInput from "./MessageInput.vue";

export default {
  components: {
    MessageInput,
  },
  data() {
    return {
      messages: [
        { text: "您好！很高兴为您服务！", type: "bot" },
      ],
    };
  },
  methods: {
    async sendMessage(text) {
      if (!text.trim()) return;

      this.messages.push({ text, type: "user" });

      try {
        const response = await this.$http.post(
            "http://127.0.0.1:5000/chat",
            { message: text }, // 请求数据
            {
              headers: {
                "Content-Type": "application/json", // 确保设置正确的 Content-Type
              },
            }
        );

        this.messages.push({ text: response.data.response, type: "bot" });
      } catch (error) {
        console.error("Error communicating with backend:", error);
        this.messages.push({
          text: "Error: Unable to connect to server.",
          type: "bot",
        });
      }
    },
  },


};
</script>

<style>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 800px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.header {
  background: #2d8cf0;
  color: #fff;
  padding: 10px;
  text-align: center;
}
.messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.message {
  max-width: 70%; /* 限制消息框的最大宽度 */
  word-wrap: break-word; /* 长文本换行 */
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  line-height: 1.5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.message.user {
  background: #2d8cf0;
  color: #fff;
  align-self: flex-end; /* 用户消息靠右 */
  border-top-right-radius: 0; /* 优化右侧样式 */
}
.message.bot {
  background: #f1f1f1;
  color: #000;
  align-self: flex-start; /* 机器人消息靠左 */
  border-top-left-radius: 0; /* 优化左侧样式 */
}
</style>
