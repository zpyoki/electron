import config from '../utils/config.js'

const build = {
  "productName": config.projectName,
  "appId": config.appId,
  "copyright": config.copyright,
  "files": [
    "dist",
    "src/application/**/*",
    "src/utils/**/*"
  ],
  "directories": {
    "buildResources": "src/assets",
    "output": "dist_electron"
  },
  "fileAssociations": [
    {
      "ext": "px",
      "name": "px7",
      "description": "px7 document",
      "role": "Editor",
      "icon": "src/assets/icons/icon.ico"
    },
    {
      "ext": "sjs",
      "name": "sjs",
      "description": "sjs document",
      "role": "Editor",
      "icon": "src/assets/icons/icon.ico"
    }
  ],
  "extraResources": ["files"],
  "win": {
    "target": [
      "nsis"
    ]
  },
  "nsis": {
    "oneClick": false,
    "allowToChangeInstallationDirectory": true
  },
  "mac": {
    "target": "dmg",
    "category": "public.app-category.utilities",
    "hardenedRuntime": true,
    "gatekeeperAssess": false
  },
  "dmg": {}
}

export default build