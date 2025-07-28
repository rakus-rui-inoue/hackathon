<script setup>
import ChatInput from "../forms/ChatInput.vue"
import ChatList from "../common/ChatList.vue"
import { useChat } from "../composables/useChat.js"

const {
  userName,
  chatContent,
  chatList,
  onPublish,
  onExit,
  onMemo
} = useChat()
</script>

<template>
  <v-container fluid class="fill-height pa-0">
    <v-layout column>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-title>
          <v-icon left>mdi-chat</v-icon>
          Vue.js Chat チャットルーム
        </v-app-bar-title>
        
        <template v-slot:append>
          <v-chip
            color="white"
            text-color="primary"
            class="mr-2"
          >
            <v-icon start>mdi-account</v-icon>
            {{ userName }}さん
          </v-chip>
          
          <v-btn
            icon
            @click="onExit"
            color="white"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-card
            class="mx-auto"
            max-width="800"
            elevation="2"
          >
            <v-card-text>
              <ChatInput
                v-model="chatContent"
                @publish="onPublish"
                @memo="onMemo"
              />
              
              <ChatList :chat-list="chatList" />
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-container>
</template>