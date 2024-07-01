import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLockStore = defineStore('lock', () => {
  const locked = ref(false)
  const lockedPwd = ref('')

  function confirmLock(val) {
    if (locked.value) {
      if (lockedPwd.value) {
        if (lockedPwd.value === val.pwd) {
          val.resp('密码正确')
          lockedPwd.value = ''
        } else {
          val.resp('密码错误')
          return
        }
      } else {
        val.resp('设置锁屏密码成功')
        lockedPwd.value = val.pwd
        return
      }
    }
    locked.value = !locked.value
  }

  function cancelLock() {
    locked.value = false
    lockedPwd.value = ''
  }

  return {
    locked,
    lockedPwd,
    confirmLock,
    cancelLock
  }
})