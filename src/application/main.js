import path from 'path'
import { fileURLToPath } from 'url'
import {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  nativeImage,
  shell,
  Tray,
} from 'electron'
// import { autoUpdater } from 'electron-updater'
// import log from 'electron-log'
import eDebug from 'electron-debug'
// import { progress, tray, window, store, shortcut } from './electrons'

// __filename && __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 环境判断
console.log('NODE_ENV:', process.env.NODE_ENV)
const isProduction = process.env.NODE_ENV !== 'development'

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

// debug
const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'
if (isDevelopment) eDebug()

// appUpdater
class AppUpdater {
  constructor() {
    log.transports.file.level = 'info'
    autoUpdater.logger = log
    autoUpdater.checkForUpdatesAndNotify()
  }
}

// instance
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (_event, _commandLine, _workingDirectory) => {
    // console.log('second-instance')
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

// mainWindow
let mainWindow = null

const createWindow = () => {
  mainWindow = new BrowserWindow({
    // show: false,
    width: 950,
    height: 700,
    // titleBarStyle: 'hiddenInset',
    // titleBarStyle: 'hidden',
    // titleBarStyle: 'customButtonsOnHover',
    // trafficLightPosition: { x: 50, y: 50 },
    // frame: false,
    transparent: true,
    // backgroundColor: '#00000000',
    // icon: getAssetPath('icon.png'),
    icon: nativeImage.createFromPath(
      path.join(__dirname, '../assets/icons/icon.ico'),
    ),
    webPreferences: {
      // nodeIntegration: true,
      // contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  if (isProduction) {
    mainWindow.loadFile(`${__dirname}/../../dist/index.html`)
    // mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadURL('http://localhost:8888')
    // 打开开发工具
    mainWindow.webContents.openDevTools();
  }
  // mainWindow.show();
  // mainWindow.maximize()

  // ready-to-show
  mainWindow.on('ready-to-show', () => {
    console.log('---readyToShow---');
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    } else {
      // console.log('ready-to-show')
      // init();
    }
  });

  // close
  mainWindow.on('close', (event) => {
    console.log('---close---')
    if (process.platform === 'darwin') {
      mainWindow.hide()
      event.preventDefault()
    }
  });

  // closed
  mainWindow.on('closed', () => {
    console.log('---closed---')
    mainWindow = null
  });

  // Open urls in the user's browser
  mainWindow.webContents.on('new-window', (event, url) => {
    console.log('newWindow')
    event.preventDefault()
    shell.openExternal(url)
  });

  // Remove this if your app does not use auto updates
  // new AppUpdater()
};

let trayObj = null
// whenReady
app
  .whenReady()
  .then(() => {
    console.log('---whenReady---')

    createWindow()

    // init()

    app.on('activate', () => {
      console.log('---activate---')
      // if (BrowserWindow.getAllWindows().length === 0) createWindow()
      if (mainWindow === null) createWindow()
      if (process.platform === 'darwin') mainWindow.show()
    })
  })
  .catch(console.log)

// window-all-closed
app.on('window-all-closed', () => {
  console.log('---allClosed---');
  if (process.platform !== 'darwin') app.quit();
});

// init
const init = () => {
  // protocol
  app.setAsDefaultProtocolClient('silence')

  if (!mainWindow?.isVisible()) {
    mainWindow?.setAlwaysOnTop(true)
    mainWindow?.setMenuBarVisibility(false)
    // mainWindow?.setResizable(false)
    // mainWindow?.setMinimumSize(helper.config.windowWidth, helper.config.windowHeight)
    // mainWindow?.maximize()
    mainWindow?.center()
    mainWindow?.show()
    mainWindow?.focus()
    mainWindow?.setAlwaysOnTop(false)
  }

  if (mainWindow) {
    progress(mainWindow)
    shortcut(mainWindow)
    store(mainWindow);
    trayObj = tray(mainWindow, trayObj)
    trayObj.on('click', () => {
      if (mainWindow) {
        mainWindow.show()
      } else {
        createWindow()
      }
    });
    window(mainWindow)
  }
};
