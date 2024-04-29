const { app, BrowserWindow, Menu, nativeImage, Tray } = require('electron');
const os = require('os');
const path = require('path');

const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../assets/img');

const getAssetPath = (...paths) => {
  return path.join(RESOURCES_PATH, ...paths);
};

const tray = (win, trayObj) => {
  if (trayObj && !trayObj.isDestroyed()) {
    // win.flashFrame(true)
  } else {
    const icon = nativeImage.createFromPath(path.join(__dirname, './tray.png'));
    // const icon = nativeImage.createFromPath(
    //   path.join(__dirname, '../assets/icons/256x256.png'),
    // );
    trayObj = new Tray(icon);
    const platform = os.platform();
    if (platform === 'win32') {
      const contextMenu = Menu.buildFromTemplate([
        { label: '退出', click: () => win.destroy() },
      ]);
      trayObj.setContextMenu(contextMenu);
    } else {
      const contextMenu = Menu.buildFromTemplate([
        { label: '退出mac', click: () => win.destroy() },
      ]);
      trayObj.setContextMenu(contextMenu);
    }
  }
  return trayObj;
};

module.exports = tray;
