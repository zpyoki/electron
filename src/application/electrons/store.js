const { BrowserWindow, ipcMain } = require('electron')
const Store = require('electron-store')
const storeObj = new Store()

const store = (_win) => {
  ipcMain.on("store-get", (event, arg) => event.returnValue = storeObj.get(arg.key))

  ipcMain.on("store-set", (_event, arg) => storeObj.set(arg.key, arg.value))

  ipcMain.on("store-delete", (_event, arg) => storeObj.delete(arg.key))
}

module.exports = store
