<script setup>
import { inject, ref } from "vue"
import { useRouter } from "vue-router"
import socketManager from '../socketManager.js'

// #region global state
const userName = inject("userName")
// #endregion

// #region local variable
const router = useRouter()
const socket = socketManager.getInstance()
// #endregion

// #region reactive variable
const inputUserName = ref("")
const inputError = ref("")
// #endregion

// #region browser event handler
// 入室メッセージをクライアントに送信する
const onEnter = () => {
  // ユーザー名が入力されているかチェック
  if (inputUserName.value.trim() === "") {
    inputError.value = "ユーザ名は必須です"
    return
  }

  // 入室メッセージを送信
  socket.emit("enterEvent", { userName: inputUserName.value })
  // 全体で使用するnameに入力されたユーザー名を格納
  userName.value = inputUserName.value
  // チャット画面へ遷移
  router.push({ name: "chat" })
}
// #endregion
</script>

<template>
  <div class="mx-auto my-5 px-4">
    <h1 class="text-2xl font-bold text-center">Vue.js Chat サンプル</h1>
    <div class="mt-10">
      <p>ユーザー名</p>
      <v-sheet max-width="400">
        <v-text-field
          v-model="inputUserName"
          label="ユーザ名を入力"
          outlined
          dense
          :rules="[v => !!v || 'ユーザ名は必須です']"
          @keyup.enter="onEnter"
          :error-messages="inputError"
        ></v-text-field>
      </v-sheet>
    </div>
    <v-btn class="mt-4" block color="primary" @click="onEnter">入室する</v-btn>
  </div>
</template>