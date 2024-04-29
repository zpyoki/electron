const {
  BrowserWindow,
  ipcMain,
  ipcRenderer,
  globalShortcut,
  Menu,
  MenuItem,
} = require('electron');
const handle = require('./handle');

const shortList = [
  { name: 'Reload', key: 'F5', event: (win) => win.reload() },
  { name: 'global', key: 'F7', event: (win) => handle.keyingStart() },
  { name: 'global', key: 'F8', event: (win) => handle.keyingStop() },
  {
    name: 'DevTools',
    key: 'F12',
    event: (win) => win.webContents.toggleDevTools(),
  },
];

const shortcut = (win) => {
  const menu = new Menu();
  const tmp = [];
  shortList.forEach((item) => {
    if (item.name === 'global') {
      globalShortcut.register(item.key, () => item.event(win));
    } else {
      tmp.push({
        role: item.name,
        accelerator: item.key,
        click: () => item.event(win),
      });
    }
  });
  menu.append(new MenuItem({ label: 'Shortcut', submenu: tmp }));
  Menu.setApplicationMenu(menu);
};

module.exports = shortcut;
