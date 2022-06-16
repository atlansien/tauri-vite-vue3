<script setup lang="ts">
import { computed, ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
const timerId = ref(0);

const countDown = () => {
  timerId.value = setInterval(() => {
    count.value++;
  }, 1000);
};

const minute = computed(() => {
  return ('0' + (Math.floor(count.value / 60) % 60)).slice(-2);
});

const second = computed(() => {
  return ('0' + (Math.floor(count.value) % 60)).slice(-2);
});

const stop = () => {
  window.clearInterval(timerId.value);
};

const reset = () => {
  count.value = 0;
};
</script>

<template>
  <h1>{{ minute }}:{{ second }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="countDown()">count is: {{ count }}</button>
  <button type="button" @click="stop()">stop</button>
  <button type="button" @click="reset">reset</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
