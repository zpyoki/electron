<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { message } from 'ant-design-vue'

const emit = defineEmits(['close', 'cancel'])
const inputRef = ref(null)
const pwd = ref('')
const cancelFlag = ref(true)
const cancelTip = ref('按`  ESC  `键退出')

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    emit('close', { pwd: pwd.value, resp: res => {
      switch (res) {
        case '设置锁屏密码成功':
          message.success('设置锁屏密码成功')
          cancelFlag.value = false
          cancelTip.value = ''
          break
        case '密码正确':
          message.success('密码正确')
          cancelFlag.value = true
          cancelTip.value = '按`  ESC  `键退出'
          break
        case '密码错误':
          message.error('密码错误')
          cancelFlag.value = false
          cancelFlag.value = ''
          break
        default:
          break
      }
    }})
    pwd.value = ''
  }
}

function handleKeydown(event) {
  if (cancelFlag.value && event.key === 'Escape') {
    emit('cancel')
  } else if (event.ctrlKey && event.shiftKey && event.key === 'C') {
    emit('cancel')
  }
}

onMounted(() => {
  window.addEventListener('keypress', handleKeyPress)
  window.addEventListener('keydown', handleKeydown)
  const currentFocusedElement = document.activeElement
  if (currentFocusedElement) currentFocusedElement.blur()
  inputRef.value.focus()
})

onUnmounted(() => {
  window.removeEventListener('keypress', handleKeyPress)
  window.removeEventListener('keydown', handleKeydown)
})
</script>


<template>
  <div class='lock-container'>
    <div class='operate-container'>
      <a-input-password ref='inputRef' v-model:value='pwd' placeholder='输入锁屏密码' />
      <div>
        <a-button type="link" v-if="cancelFlag" @click="emit('cancel')" style="margin: 20px;">{{ cancelTip }}</a-button>
      </div>
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
  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #2F368F), color-stop(1, #77D1F6));
  z-index: 998;
}
.operate-container {
  position: absolute;
  top: 80%;
  left: 50%;
  /* background: pink; */
  transform: translate(-50%, -50%);
}
</style>
