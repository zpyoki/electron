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
  "dmg": {
    "contents": [
      {
        "x": 410,
        "y": 150
      },
      {
        "x": 130,
        "y": 150,
        "type": "link",
        "path": "/Applications"
      }
    ]
  }
}

export default build