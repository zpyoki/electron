// const notify = async (data = { title: '', msg: '', icon: '' }, callback) => {
//   if (!('Notification' in window)) {
//     console.log('This browser does not support desktop notification')
//   } else if (Notification.permission === 'granted') {
//     handleNotify(data, callback)
//   } else if (Notification.permission !== 'denied') {
//     Notification.requestPermission().then(permission => {
//       if (permission === 'granted') handleNotify(data, callback)
//     })
//   }
// }

// const handleNotify = (data, callback) => {
//   const notify = new Notification(typeof data !== 'object' ? data : data.title, { body: data.msg, icon: require('./notify.png') })
//   notify.onclick = callback
//   notify.onerror = (error) => { console.log(error) }
// }

// export default notify
