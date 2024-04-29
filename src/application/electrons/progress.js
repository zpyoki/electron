const { BrowserWindow, ipcMain } = require('electron')

const progress = (win) => {
  ipcMain.on('window-progress', (_e, progress) => {
    win.setProgressBar(progress)
  })
}

module.exports = progress
