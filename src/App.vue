<script setup lang="ts">
import { ref } from 'vue';
import { useTimerStore } from './stores/timer';
import clapSound from './assets/clapping.mp3'

import Circle from './components/Circle.vue';
import FormVue from './components/Form.vue';
import Time from './components/Time.vue';
import Modal from './components/Modal.vue';

defineProps<{ msg: string }>();
const timer = useTimerStore();
timer.setLimitSecond();

const isVisible = ref(false);

const openModal = () => {
  isVisible.value = true;
};

const closeModal = () => {
  isVisible.value = false;
};

  const clapping = () => {
    const audio = new Audio(clapSound);
    audio.volume = 0.2;
    audio.play();
  };

const reset = () => {
  clapping();
  timer.resetTimer();
};

</script>

<template>
  <Modal :is-visible="isVisible" @close="closeModal" />
  <div
    class="App"
    :style="{
      backgroundColor:
        timer.getCount >= timer.getLimitMilliSecond ? 'orangered' : 'lightcyan',
    }"
  >
    <div class="item">
      <img class="App-logo" alt="Vue logo" src="./assets/logo.png" />
      <Circle
        :outerR="200"
        :strokeWidth="20"
        :value="timer.getCount"
        :max="timer.getLimitSecond"
        color="#6fdb6f"
      />
    </div>
    <Time :count="timer.count" :limitSecond="timer.getLimitSecond" />
    <FormVue
      @open="openModal"
      @change-limit-second="timer.changeLimitSecond"
      :limit-second="timer.getLimitSecond"
      :count="timer.count"
      :timerId="timer.timerId"
      @start="timer.startTimer"
      @stop="timer.stopTimer"
      @reset="reset"
      @clap="clapping"
    />
  </div>
</template>

<style>
.App {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
}
.App-logo {
  position: absolute;
  height: 50%;
  width: 50%;
  left: 25%;
  top: 30%;
}
.item {
  position: relative;
  float: left;
}
</style>
