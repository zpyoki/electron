import { BrowserWindow, ipcMain } from 'electron'
import { platform } from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fse from 'fs-extra'
import fileSaver from 'file-saver'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// const filePath = path.join(__dirname, `../../package.json`)

const readFile = (path) => {
  try {
    const result = fse.readFileSync(path)
    return { code: 0, data: result}
  } catch (err) {
    return { code: -1, msg: err.message }
  }
}

const file = () => {
  ipcMain.on('readFile', async (event, path) => {
    const result = await readFile(path)
    event.returnValue = result
  })

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
