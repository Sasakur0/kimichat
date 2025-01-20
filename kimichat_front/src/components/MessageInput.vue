<template>
  <div class="input-box">
    <el-input
        v-model="inputText"
        placeholder="Type your message..."
        @keyup.enter="send"
    />
    <el-button type="primary" @click="send">Send</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
  methods: {
    send() {
      if (this.inputText.trim()) {
        this.$emit("send", this.inputText.trim());
        this.inputText = "";
      }
    },
  },
};
</script>

<style>
.input-box {
  display: flex;
  padding: 10px;
  border-top: 1px solid #f1f1f1;
}
</style>
