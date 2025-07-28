import { createRouter, createWebHistory } from "vue-router"
import ChatPage from "../components/pages/ChatPage.vue"
import EnterPage from "../components/pages/EnterPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      component: EnterPage
    },
    {
      path: "/chat/",
      name: "chat",
      component: ChatPage,
      beforeEnter: (_, from, next) => {
        if(from.name === "login"){
          next()
        } else {
          next({ name:"login" })
        }
      },
    }
  ],
})

export default router