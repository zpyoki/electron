export function useThrottle() {
  const throttle = (fn, delay) => {
    let timer = null
    return () => {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(this, arguments)
          timer = null
        }, delay)
      }
    }
  }
 
  return { throttle }
}