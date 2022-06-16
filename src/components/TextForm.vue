<script setup lang="ts">
import { computed, defineEmits } from 'vue';

const props = defineProps<{
  value: string | number;
}>();

interface Emits {
  (e: 'input', value: string | number): void;
}

const emit = defineEmits<Emits>();

const inputText = computed({
  get: () => props.value,
  set: (value: string | number) => emit('input', value),
});
</script>

<template>
  <input class="text-form" v-model="inputText" />
</template>

<style scoped>
.text-form {
  background-color: seashell;
  border-radius: 3px;
  width: 50px;
  font-size: 18px;
  padding: 0.5rem;
  color: #464646;
}
</style>
