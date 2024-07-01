<script setup>
import { ref } from 'vue'
import { useBaseStore } from '@/store/base'

const baseStore = useBaseStore()

function toogleLock() {
  baseStore.toogleLock()
}

function reloadPage() {
  window.location.reload()
}

function toogleConsole() {
  window.electron.ipcRenderer.send('toggleDevTools')
}
</script>


<template>
  <a-layout-header class='dragable'>
    <!-- <div style='height: inherit;'>LOGO</div> -->
    <div></div>
    <div class='dragless'>
      <a-button @click="toogleLock">锁定</a-button>
      <a-button @click="reloadPage">刷新</a-button>
      <a-button @click="toogleConsole">控制台</a-button>
    </div>
  </a-layout-header>
</template>

<style scoped>
.ant-layout-header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 0;
  height: var(--px-layout-header-height);
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
  z-index: 1;
  position: fixed;
  top: 0;
}
</style>