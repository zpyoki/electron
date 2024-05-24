import { ref } from 'vue'

function openSpreadExce (spread, blob, options = {}) {
  return new Promise((resolve, reject) => {
    spread.open(blob, () => {
      resolve({ code: 0, msg: 'open spread ok' })
    }, (err) => {
      resolve({ code: -1, msg: err.errorMessage })
    }, options)
  })
}

export const openSpread = async (spread, file, options = {}) => {
  let result = {}
  const resFile = window.electron.ipcRenderer.sendSync('readFile', file)
  if (resFile.code === 0) {
    const blob = new Blob([resFile.data.buffer])
    result = await openSpreadExce(spread, blob, options)
  } else {
    result = resFile
  }
  return result
}

export const saveSpread = (spread, file, options = {}) => {
  return new Promise((resolve, reject) => {
    spread.save(async blob => {
      const buf = Buffer.from(await blob.arrayBuffer())
      const result = window.electron.ipcRenderer.sendSync('writeFile', file, buf)
      resolve(result)
    }, (err) => {
      resolve({ code: -1, msg: err.message })
    }, options)
  })
}