import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  // 定义响应式的状态
  const data = ref(null)
  const error = ref(null)

  data.value = null
  error.value = null

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  // 返回响应式的状态
  return { data, error }
}