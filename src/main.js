import { createApp } from 'vue'
import App from './App.vue'
// import 'ant-design-vue/dist/reset.css'
import './style.css'
import { GcSpreadSheets, GcWorksheet } from '@grapecity-software/spread-sheets-vue'

let app = createApp(App)

let electron = null
if (window.require) {
  electron = window.require('electron')
}
window.electron = electron

app.component('GcSpreadSheets', GcSpreadSheets)
app.component('GcWorksheet', GcWorksheet)

app.config.errorHandler = (err) => {
  if (err) console.log('哎呦喂，出错了：', err)
}

app.mount('#app')
