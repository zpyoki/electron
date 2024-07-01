import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBaseStore = defineStore('base', () => {
  const locked = ref(false)

  function toogleLock() {
    locked.value = !locked.value
  }

  return {
    locked,
    toogleLock
  }
})