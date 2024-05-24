<script setup>
import { reactive, ref } from 'vue'
import { useMouse } from '@/hooks/event/useMouse'
import { openSpread, saveSpread } from '@/hooks/spread/useSpread'
// import { openSpread, saveSpread } from '@/hooks/spread'

const { x, y } = useMouse()

let spread = null

const openFile = async () => {
  // const res = await openSpread(spread, 'QuickQuotation.sjs')
  const res = await openSpread(spread, 'demo.sjs')
  console.log(res.msg)
}

const saveFile = async () => {
  // const res = await saveSpread(spread, 'QuickQuotation.sjs')
  const res = await saveSpread(spread, 'demo.sjs')
  console.log(res.msg)
}

const toogleConsole = () => {
  window.electron.ipcRenderer.send('toggleDevTools')
}

function initialized (value) {
  spread = value
  spread.options.allowExtendPasteRange = true
  // console.log(spread.options)
}

</script>

<template>
  <div >
    <div class='operator'>
      <a-button @click="openFile">打开文件</a-button>
      <a-button @click="saveFile">保存文件</a-button>
    </div>
    <!-- <a-icon type="border" /> -->
    <div class="spreadContainer">
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
  height: calc(100vh - 56px - 32px - 32px - 32px);
}
.spreadHost {
  width: 100%;
  height: 100%;
}
</style>
