<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  count: number;
  limitSecond: number;
}>();

const minute = computed(() => {
  return ('0' + (Math.floor(props.count / 100 / 60) % 60)).slice(-2);
});

const second = computed(() => {
  return ('0' + (Math.floor(props.count / 100) % 60)).slice(-2);
});

const timeColor = computed(() => {
  if(props.count >= props.limitSecond * 100) return 'lightyellow';
    else return 'royalblue';
})

</script>

<template>
  <h1 :style="{color: timeColor}">{{minute}}:{{second}}</h1>
</template>

<style scoped>
</style>
