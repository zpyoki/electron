import path from 'path'
import { fileURLToPath } from 'url'
import fse from 'fs-extra'
import build from './build.js'

const updatePackageInfo = () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filePath = path.join(__dirname, `../../package.json`)
  const tmp = fse.readJsonSync(filePath)
  tmp.build = build
  fse.writeJsonSync(filePath, tmp, { spaces: 2 })
}

updatePackageInfo()