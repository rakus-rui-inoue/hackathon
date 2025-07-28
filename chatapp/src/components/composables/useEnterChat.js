import { useRouter } from "vue-router"
import socketManager from "../../socketManager"
import { inject } from "vue"

export function useEnterChat(inputUserName, errorMessage) {
  const router = useRouter()
  const socket = socketManager.getInstance()
  const userName = inject("userName")

  if (!userName) throw new Error("userNameが inject できません")

  const onEnter = () => {
    if (inputUserName.value.trim() === "") {
      errorMessage.value = "ユーザ名は必須です"
      return
    }

    errorMessage.value = ""
    socket.emit("enterEvent", { userName: inputUserName.value })
    userName.value = inputUserName.value
    router.push({ name: "chat" })
  }

  return { onEnter }
}