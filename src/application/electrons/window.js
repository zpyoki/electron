import { BrowserWindow, ipcMain } from 'electron'
import { platform } from 'os'

const window = (win) => {
  ipcMain.on('toggleDevTools', () => win.webContents.toggleDevTools())

  ipcMain.on('window-min', () => win.minimize())

  ipcMain.on('window-max', () => {
    if (win.isMaximized()) {
      win.unmaximize()
    } else {
      win.maximize()
    }
  })

  ipcMain.on('window-close', () => {
    const Store = require('electron-store')
    const storeObj = new Store()
    storeObj.delete('to')
    storeObj.delete('from')
    // win.hide()
    win.destroy()
  })

  // ipcMain.on('window-resize', (_event, arg) => {
  //   win.setResizable(true)
  //   win.setSize((arg && arg.width) || helper.config.windowWidth, (arg && arg.height) || helper.config.windowHeight)
  //   win.center()
  //   win.setResizable(false)
  // })

  ipcMain.on('window-pin', (event) => {
    win.setAlwaysOnTop(!win.isAlwaysOnTop())
    event.returnValue = win.isAlwaysOnTop()
  })

  ipcMain.on('window-platform', (event) => {
    return (event.returnValue = platform())
  })
}

export default window
