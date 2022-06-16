<script setup lang="ts">
import { defineEmits } from 'vue';
import Button from './Button.vue';
import TextForm from './TextForm.vue';

const props = defineProps<{
  count: number;
  timerId: number;
  limitSecond: number;
}>();

interface Emits {
  (e: 'start'): void;
  (e: 'stop'): void;
  (e: 'reset'): void;
  (e: 'changeLimitSecond', value: number): void;
  (e: 'open'): void;
  (e: 'clap'): void;
}

const emit = defineEmits<Emits>();

const handleStart = () => {
  emit('start');
};

const handleStop = () => {
  emit('stop');
};

const handleReset = () => {
  emit('reset');
};

const handleChangeLimitSecond = (value: string | number) => {
  emit('changeLimitSecond', Number(value));
};

const handleClap = () => {
  emit('clap');
}
</script>

<template>
  <div>
    <Button v-if="timerId === 0" color="royalblue" @click="handleStart"
      >START</Button
    >
    <Button v-if="timerId !== 0" color="red" @click="handleStop">STOP</Button>
    <Button v-if="count" color="dimgray" @click="handleReset">RESET</Button>
    <Button color="gold" @click="handleClap">CLAP</Button>
  </div>
  <p>
    下のフォームに背景色を変化させたい。
    <br />
    タイミングを秒数で入力してください。
  </p>
  <TextForm :value="limitSecond" @input="handleChangeLimitSecond" />
  <p>以下のボタンをクリックすると細かい色の変更を行うことができます</p>
  <Button color="gray" @click="emit('open')">色の変更</Button>
</template>

<style scoped></style>
