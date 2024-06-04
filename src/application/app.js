import path from 'path'
import { app, BrowserWindow, nativeImage, Notification } from 'electron'
import { fileURLToPath } from 'url'
import config from '../utils/config.js'
import electronUtils from './electrons/index.js'

// 设置环境变量
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// const isDevelopment = process.env.NODE_ENV !== 'production'
// console.log('测试环境：', isDevelopment, process.env.NODE_ENV)
const isProduction = process.env.NODE_ENV !== 'development'
console.log('生产环境：', isProduction, process.env.NODE_ENV)

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true

// 获取资源路径
const getAssetPath = (...paths) => {
  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../assets')
  return path.join(RESOURCES_PATH, ...paths)
}

// mainWindow
let mainWindow = null

// 创建窗口
const createWindow = () => {
  mainWindow = new BrowserWindow({
    title: config.projectName,
    width: 950,
    height: 700,
    // titleBarStyle: 'hidden',
    titleBarStyle: 'hiddenInset',
    // frame: false,
    transparent: true,
    icon: getAssetPath(config.ico),
    // icon: nativeImage.createFromPath(getAssetPath(config.ico)),
    // icon: nativeImage.createFromPath(getAssetPath('icons/icon.icns')),
    // icon: nativeImage.createFromPath(path.join(__dirname, '../assets/icons/icon.icns')),
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      // preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加载页面
  if (isProduction) {
    const filePath = path.join(__dirname, '../../dist/index.html')
    mainWindow.loadFile(filePath)
  } else {
    mainWindow.loadURL("http://localhost:8888")
    mainWindow.webContents.openDevTools()
  }

  init()
  
  mainWindow.on('ready-to-show', () => {
    console.log('---readyToShow---')
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined')
    } else {
      // init()
    }
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 初始化
const init = () => {
  console.log('---init---')
  // protocol
  app.setAsDefaultProtocolClient('silence')

  // 窗口-前置操作
  if (!mainWindow.isVisible()) {
    mainWindow.setAlwaysOnTop(true)
    // mainWindow?.setMenuBarVisibility(false)
    mainWindow.center()
    mainWindow.show()
    mainWindow.focus()
    mainWindow.setAlwaysOnTop(false)
  }

  if (mainWindow) {
    // progress(mainWindow)
    // shortcut(mainWindow)
    // store(mainWindow);
    // trayObj = tray(mainWindow, trayObj)
    // trayObj.on('click', () => {
    //   if (mainWindow) {
    //     mainWindow.show()
    //   } else {
    //     createWindow()
    //   }
    // });
    electronUtils.file()
    electronUtils.window(mainWindow)
  }
}