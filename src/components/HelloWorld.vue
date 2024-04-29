<script setup>
import { reactive, ref } from 'vue'

const dataTable = reactive([
  {
    name: '张三',
    age: 18,
    gender: '男',
  },
  {
    name: '李四',
    age: 20,
    gender: '男',
  },
  {
    name: '王五',
    age: 22,
    gender: '男',
  },
])

const openFile = () => {
  const res = window.electron.ipcRenderer.send('readFile')
  console.log(res)
}


const saveFile = () => {
  const res = window.electron.ipcRenderer.sendSync('writeFile', 'files/test.txt', '我是内vsfsgs容')
  console.log(res ? '保存成功' : '保存失败')
}

const toogleConsole = () => {
  window.electron.ipcRenderer.send('toggleDevTools')
}

</script>

<template>
  <div class="componentContainer" >
    <h3>快速入门指南</h3>
    <a-button @click="openFile">打开文件</a-button>
    <a-button @click="saveFile">保存文件</a-button>
    <a-button @click="toogleConsole">控制台</a-button>
    <!-- <a-icon type="border" /> -->
    <div class="spreadContainer">
      <GcSpreadSheets :hostClass='"spreadHost"'>
        <GcWorksheet :dataSource="dataTable"/>
      </GcSpreadSheets>
    </div>
  </div>
</template>

<style scoped>
.spreadContainer {
  padding: 10px;
  box-shadow: 0 0 20px grey;
  height: 800px;
}
.spreadHost{
  width: 100%;
  height: 100%;
}
</style>
