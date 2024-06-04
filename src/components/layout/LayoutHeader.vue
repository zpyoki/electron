<script setup>
import { ref } from 'vue'

function reloadPage() {
  window.location.reload()
}

function toogleConsole() {
  window.electron.ipcRenderer.send('toggleDevTools')
}
</script>


<template>
  <a-layout-header class='dragable' style='background: #fff;padding: 0;height: 56px;'>
    <div style='height: inherit;'>LOGO</div>
    <div class='dragless'>
      <a-button @click="reloadPage">刷新</a-button>
      <a-button @click="toogleConsole">控制台</a-button>
    </div>
  </a-layout-header>
</template>

<style scoped>
.ant-layout-header {
  display: flex;
  justify-content: space-between;
}
</style>