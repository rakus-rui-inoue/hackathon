<template>
  <v-container class="pa-0 mt-4" v-if="chatList.length !== 0">
    <v-card
      variant="outlined"
      class="overflow-y-auto"
      max-height="400"
    >
      <v-list>
        <template v-for="(chat, i) in chatList" :key="i">
          <v-list-item>
            <v-list-item-content>
              <v-chip
                :color="getChipColor(chat)"
                text-color="white"
                label
                class="mb-2"
              >
                <v-icon start>{{ getIcon(chat) }}</v-icon>
                {{ chat }}
              </v-chip>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="i < chatList.length - 1"></v-divider>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
defineProps({
  chatList: {
    type: Array,
    required: true
  }
})

const getChipColor = (message) => {
  if (message.includes('入室しました')) return 'success'
  if (message.includes('退室しました')) return 'error'
  return 'primary'
}

const getIcon = (message) => {
  if (message.includes('入室しました')) return 'mdi-login'
  if (message.includes('退室しました')) return 'mdi-logout'
  return 'mdi-message'
}
</script>