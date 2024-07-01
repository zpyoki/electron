<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useBaseStore } from '@/store/base'

const baseStore = useBaseStore()
const inputRef = ref(null)
const pwd = ref('')

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    console.log(pwd.value)
    baseStore.toogleLock()
  }
}

onMounted(() => {
  window.addEventListener('keypress', handleKeyPress)
  const currentFocusedElement = document.activeElement
  if (currentFocusedElement) currentFocusedElement.blur()
  inputRef.value.focus()
})

onUnmounted(() => {
  window.removeEventListener('keypress', handleKeyPress)
})
</script>


<template>
  <div class='lock-container'>
    11233
    <div class='operate-container'>
      <a-input ref='inputRef' v-model:value='pwd' type='password' autofocus placeholder='输入密码' />
    </div>
  </div>
</template>

<style scoped>
.lock-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: pink;
  /* z-index: 998; */
}
.operate-container {
  position: absolute;
  top: 80%;
  left: 50%;
  background: pink;;
  transform: translate(-50%, -50%);
}
</style>