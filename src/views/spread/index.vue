<script setup>
import { reactive, ref } from 'vue'
import { useMouse } from '@/hooks/event/useMouse'
import { openSjs } from '@/utils/spread'

const { x, y } = useMouse()

const spread = ref(null)

const openFile = async () => {
  const res = window.electron.ipcRenderer.sendSync('readFile', 'files/test2.sjs')
  if (res.code === 0) {
    const file = new File([res.data], 'spread.sjs')
    const openRes = await openSjs(spread.value, file)
    if (openRes) console.log(openRes)
  } else {
    alert(res.msg)
  }
}

const saveFile = () => {
  spread.value.save(async function (blob) {
    const buf = Buffer.from(await blob.arrayBuffer())
    const res = window.electron.ipcRenderer.sendSync('writeFile', 'files/test2.sjs', buf)
    console.log(res, res ? '保存成功' : '保存失败')
  }, function (err) {
    console.log(err)
  })
}

const toogleConsole = () => {
  window.electron.ipcRenderer.send('toggleDevTools')
}

function initialized (value) {
  spread.value = value
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
