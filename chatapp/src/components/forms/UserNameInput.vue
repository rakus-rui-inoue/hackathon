<template>
    <v-text-field
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    @keyup.enter="$emit('enter')"
    :error-messages="errorMessage"
    label="ユーザ名を入力"
    outlined
    dense
  />
</template>

<script setup>
defineProps({
    modelValue: String,
    errorMessage: String,
})
defineEmits(['update:modelValue', 'enter'])
</script>