<script setup>
import { reactive, ref } from 'vue'
import { useMouse } from '@/hooks/event/useMouse'
import { openSpread, saveSpread } from '@/utils/spread'

const { x, y } = useMouse()

let spread = null

const openFile = async () => {
  const resTmp = window.electron.ipcRenderer.sendSync('readFile', 'files/test2.sjs')
  if (resTmp.code === 0) {
    const file = new File([resTmp.data], 'srread.sjs')
    const res = await openSpread(spread, file)
    console.log(res.msg)
  } else {
    alert(res.msg)
  }
}

const saveFile = async () => {
  const res = await saveSpread(spread, 'files/test2.sjs')
  console.log(res.msg)
}

const toogleConsole = () => {
  window.electron.ipcRenderer.send('toggleDevTools')
}

function initialized (value) {
  spread = value
}

</script>

<template>
  <div >
    <!-- <div>Mouse position is at: {{ x }}, {{ y }}</div> -->
    <a-button @click="openFile">打开文件</a-button>
    <a-button @click="saveFile">保存文件</a-button>
    <a-button @click="toogleConsole">控制台</a-button>
    <!-- <a-icon type="border" /> -->
    <div class="spreadContainer">
      <input id='fileItem' type="file">
      <GcSpreadSheets :hostClass='"spreadHost"' @workbookInitialized='initialized'>
        <!-- <GcWorksheet :dataSource="dataTable" /> -->
      </GcSpreadSheets>
    </div>
  </div>
</template>

<style scoped>
.spreadContainer {
  padding: 10px;
  box-shadow: 0 0 20px grey;
  height: 500px;
}
.spreadHost{
  width: 100%;
  height: 100%;
}
</style>
