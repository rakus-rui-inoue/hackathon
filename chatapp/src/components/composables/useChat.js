import { inject, ref, reactive, onMounted } from "vue"
import { useRouter } from "vue-router"
import socketManager from "../../socketManager"

export function useChat() {
  const router = useRouter()
  const socket = socketManager.getInstance()
  const userName = inject("userName")

  if (!userName) throw new Error("userNameが inject できません")

  const chatContent = ref("")
  const chatList = reactive([])

  const onPublish = () => {
    socket.emit("publishEvent", { message: chatContent.value }) 
    chatContent.value = ""
  }

  const onExit = () => {
    socket.emit("exitEvent", { userName: userName.value })
    userName.value = ""
    router.push({ name: "login" })
  }

  const onMemo = () => {
    const memoContent = chatContent.value.trim()
    if (memoContent === "") {
      return
    }
    chatList.unshift(memoContent)
    chatContent.value = ""
  }

  const registerSocketEvent = () => {
    socket.on("enterEvent", (data) => {
      const userName = data.userName
      chatList.unshift(`${userName}さんが入室しました。`)
    })

    socket.on("exitEvent", (data) => {
      const userName = data.userName
      chatList.unshift(`${userName}さんが退室しました。`)
    })

    socket.on("publishEvent", (data) => {
      chatList.unshift(data.message)
    })
  }

  onMounted(() => {
    registerSocketEvent()
  })

  return {
    userName,
    chatContent,
    chatList,
    onPublish,
    onExit,
    onMemo
  }
}