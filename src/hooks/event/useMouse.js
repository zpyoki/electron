import { ref } from 'vue'
import { useEventListener } from '@/hooks/event/useEventListener'


export function useMouse() {
  // 定义响应式的状态
  const x = ref(0)
  const y = ref(0)

  // 监听 mousemove 事件
  useEventListener(window, 'mousemove', (event) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  // 返回响应式的状态
  return { x, y }
}