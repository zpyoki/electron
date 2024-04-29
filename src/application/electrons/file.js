import { BrowserWindow, ipcMain } from 'electron'
import { platform } from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import fse from 'fs-extra'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// const filePath = path.join(__dirname, `../../package.json`)

const readFile = async (path) => {
  const result = fse.readFileSync(path, 'utf-8')
  return result
}

const writeFile = async (...args) => {
  const err = await fse.outputFileSync(args[0], args[1])
  if (err) {
    console.log('写入文件失败', err)
  }
  return !err
}

const copyFile = async () => {
  // fse.copySync
}

const file = () => {
  ipcMain.on('readFile', async () => await readFile())

  ipcMain.on('writeFile', (event, ...args) => {
    const err = fse.outputFileSync(args[0], args[1])
    if (err) {
      console.log('写入文件失败', err)
    }
    event.returnValue = !err
  })

  // ipcMain.on('window-pin', (event) => {
  //   win.setAlwaysOnTop(!win.isAlwaysOnTop())
  //   event.returnValue = win.isAlwaysOnTop()
  // })

  // ipcMain.on('window-platform', (event) => {
  //   return (event.returnValue = platform())
  // })
}

export default file
