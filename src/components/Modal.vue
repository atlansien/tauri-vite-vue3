<script setup lang="ts">

defineProps<{
  isVisible: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();



const close = () => {
  emit('close');
};

</script>

<template>
  <teleport to="body">
    <div class="modal" id="sample-modal" v-show="isVisible" @click="close"></div>
    <div class="modal-content" v-show="isVisible">ああああああああああああ内容です内容です</div>
  </teleport>
</template>

<style scoped>
.modal{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal-content{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  width: 600px;
  height: auto;
  border-radius: 20px;
  padding: 20px;
}
</style>