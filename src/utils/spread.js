export function openSjs (spread, sjsFile, options = {}) {
  return new Promise((resolve, reject) => {
    spread.open(sjsFile, () => {
      resolve('')
    }, (err) => {
      resolve(err)
    }, options)
  })
}

export function saveSjs (spread, sjsFile, options = {}) {
  return new Promise((resolve, reject) => {
    spread.save(async blob => {
      const buf = Buffer.from(await blob.arrayBuffer())
      const res = window.electron.ipcRenderer.sendSync('writeFile', 'files/test2.sjs', buf)
      console.log(res, res ? '保存成功' : '保存失败')
      resolve(blob)
    }, (err) => {
      resolve(err)
    }, options)
  })
}