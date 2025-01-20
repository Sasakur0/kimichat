import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatView from "@/views/ChatView/index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "ChatView",
    component: ChatView, // 加载聊天页面
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router
