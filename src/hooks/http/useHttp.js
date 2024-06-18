import { ref } from 'vue'
import axios from 'axios'

const http = axios.create({
  // baseURL: 'https://api.example.com',
  baseURL: `/${import.meta.env.VITE_API_PREFIX}`,
  timeout: 60 * 1000
})

// // 请求拦截器
http.interceptors.request.use((config) => {
  // header
  // config.headers.Encrypt = configLocal.encrypt.enable
  // if (store.state.token) {
  //   Object.assign(config.headers, { 'X-Access-Token': store.state.token })
  // }
  return config
}, (error) => {
  return Promise.reject(error)
})
//
// // 响应拦截器
// http.interceptors.response.use((response) => {
//   return response.data
// }, (error) => {
//   // if (error.response.status === 423) {
//   //   helper.msg.error('登录过期')
//   //   store.commit('logout')
//   // } else {
//   //   helper.msg.error(error.response.data.message || error.message)
//   // }
//   // if (error.response.status === 500) {
//   //   return error.response
//   // }
//   // if (error.response.status === 404) {
//   //   helper.msg.error(error.message)
//   //   this.$router.push('/403')
//   // }
//   // if (error.response.status === 403) {
//   //   helper.msg.error(error.message)
//   // }
//   return Promise.reject(error)
// })

export function useGet(url) {
  const resp = ref(null)
  const error = ref(null)
  const loading = ref(false)
 
  const fetchData = async () => {
    try {
      loading.value = true
      const response = await http.get(url)
      resp.value = response.data
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }
 
  return [{ resp, error, loading }, fetchData]
}

// export function useFetch(url) {
//   // 定义响应式的状态
//   const data = ref(null)
//   const error = ref(null)

//   data.value = null
//   error.value = null

//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => (data.value = json))
//     .catch((err) => (error.value = err))

//   // 返回响应式的状态
//   return { data, error }
// }