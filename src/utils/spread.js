export function openSpread (spread, file, options = {}) {
  return new Promise((resolve, reject) => {
    spread.open(file, () => {
      resolve({ code: 0, msg: 'ok' })
    }, (err) => {
      resolve({ code: -1, msg: err.message })
    }, options)
  })
}

export function saveSpread (spread, file, options = {}) {
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