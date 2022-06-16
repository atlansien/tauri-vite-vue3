<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  color: string;
  outerR: number;
  strokeWidth: number;
  value: number;
  max: number;
}>();

const size = props.outerR * 2;

const r = props.outerR - props.strokeWidth / 2;

const circumference = 2 * Math.PI * r;

const limitMilliSecond = computed(() => {
  return props.max * 100;
});

const strokeDasharray = computed(() => {
  return `${
    circumference * (props.value / limitMilliSecond.value)
  } ${circumference}`;
});
</script>

<template>
  <svg :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
    <circle
      :r="r"
      :cx="outerR"
      :cy="outerR"
      stroke="gainsboro"
      fill="transparent"
      :stroke-width="strokeWidth"
      :transform="`rotate(-90 ${outerR} ${outerR})`"
    />
    <circle
      :r="r"
      :cx="outerR"
      :cy="outerR"
      :stroke="color"
      fill="transparent"
      :stroke-width="strokeWidth"
      :stroke-dasharray="strokeDasharray"
      :transform="`rotate(-90 ${outerR} ${outerR})`"
    />
  </svg>
</template>

<style scoped>
</style>
