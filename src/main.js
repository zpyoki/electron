import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/reset.css'
import './style.css'
import router from '@/router'
import { GcSpreadSheets, GcWorksheet } from '@grapecity-software/spread-sheets-vue'
import Designer from "@grapecity-software/spread-sheets-designer-vue"

let app = createApp(App)

let electron = null
if (window.require) {
  electron = window.require('electron')
}
window.electron = electron

app.component('GcSpreadSheets', GcSpreadSheets)
app.component('GcWorksheet', GcWorksheet)
app.component("GcDesigner", Designer)

app.config.errorHandler = (err) => {
  if (err) {
    switch (err.message) {
      case "Cannot read properties of null (reading 'ipcRenderer')":
        alert('渲染进程未启动，请重启应用')
        break
      case 'ERR_ELECTRON_RENDER_CRASHED':
        console.log('渲染进程崩溃，请重启应用')
        break
      case 'ERR_ELECTRON_RENDER_PROCESS_TERMINATED':
        console.log('渲染进程被终止，请重启应用')
        break
      default:
        console.log(222)
    }
  }
}

app.use(router)

app.mount('#app')
