import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target, event, callback) {
  // 在组件挂载时添加事件监听
  onMounted(() => target.addEventListener(event, callback))
  
  // 在组件卸载时移除事件监听
  onUnmounted(() => target.removeEventListener(event, callback))
}