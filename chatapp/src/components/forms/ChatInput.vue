<template>
  <v-container class="pa-0">
    <v-textarea
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      @keyup.enter.ctrl="$emit('publish')"
      placeholder="投稿文を入力してください"
      variant="outlined"
      rows="4"
      auto-grow
      row-height="25"
      shaped
      clearable
    ></v-textarea>
    
    <v-row class="mt-2">
      <v-col cols="auto">
        <v-btn
          color="primary"
          variant="elevated"
          @click="$emit('publish')"
          prepend-icon="mdi-send"
        >
          投稿
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn
          color="secondary"
          variant="outlined"
          @click="$emit('memo')"
          prepend-icon="mdi-note-text"
        >
          メモ
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
defineProps({
  modelValue: String
})

defineEmits(['update:modelValue', 'publish', 'memo'])
</script>