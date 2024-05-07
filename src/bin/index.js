import path from 'path'
import { fileURLToPath } from 'url'
import fse from 'fs-extra'
import build from './build.js'

const rmDist = () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filePath = path.join(__dirname, `../../dist`)
  const electronFilePath = path.join(__dirname, `../../dist_electron`)
  fse.removeSync(filePath)
  fse.removeSync(electronFilePath)
  console.log('删除dist目录成功')
}

const updatePackageInfo = () => {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const filePath = path.join(__dirname, `../../package.json`)
  const tmp = fse.readJsonSync(filePath)
  tmp.build = build
  fse.writeJsonSync(filePath, tmp, { spaces: 2 })
  console.log('更新package.json成功')
}

rmDist()
updatePackageInfo()