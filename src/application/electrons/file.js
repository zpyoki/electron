import { app, BrowserWindow, ipcMain } from 'electron'
import { platform } from 'os'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fse from 'fs-extra'
import fileSaver from 'file-saver'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = process.env.NODE_ENV !== 'development'
const fileRoot = app.isPackaged
  ? path.join(app.getAppPath(), '../files')
  : path.join(app.getAppPath(), 'files')

const readFile = (filePath) => {
  try {
    const result = fse.readFileSync(filePath)
    return { code: 0, data: result }
  } catch (err) {
    return { code: -1, msg: err.message }
  }
}

const file = () => {
  ipcMain.on('readFile', async (event, filePath) => {
    const result = await readFile(path.join(fileRoot, filePath))
    event.returnValue = result
  })

  ipcMain.on('writeFile', (event, ...args) => {
    const err = fse.outputFileSync(path.join(fileRoot, args[0]), args[1])
    if (err) {
      event.returnValue = { code: -1, msg: err.message }
    } else {
      event.returnValue = { code: 0, msg: 'ok'}
    }
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
