<script setup>
import { inject, ref } from "vue"
import PageTitle from "../common/PageTitle.vue"
import UserNameInput from "../forms/UserNameInput.vue"
import { useEnterChat } from "../composables/useEnterChat.js"

const inputUserName = ref("")
const errorMessage = ref("")

const { onEnter } = useEnterChat(inputUserName, errorMessage)
</script>

<template>
  <div class="mx-auto my-5 px-4">
    <PageTitle>Vue.js Chat サンプル</PageTitle>

    <div class="mt-10">
      <p>ユーザー名</p>
      <v-sheet max-width="400">
        <UserNameInput
          v-model="inputUserName"
          :error-message="errorMessage"
          @enter="onEnter"
        />
      </v-sheet>
    </div>

    <v-btn class="mt-4" block color="primary" @click="onEnter">入室する</v-btn>
  </div>
</template>