<script setup lang="ts">
import { defineEmits } from 'vue';

interface Emits {
  (e: 'click', event: HTMLButtonElement): void;
}

const props = defineProps<{
  color: string;
}>();

const emit = defineEmits<Emits>();

const handleClick = (evt: any) => {
  emit('click', evt);
};

</script>

<template>
    <button :style="{ backgroundColor: color }" @click="handleClick"><slot></slot></button>
</template>

<style scoped>
button {
  font-size: 16px;
  color: white;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  text-decoration: none;
  vertical-align: middle;
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
}

button:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>