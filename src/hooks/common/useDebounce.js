export function useDebounce() {
  const debounce = (fn, delay) => {
    let timer = null
    return () => {
      if (timer)  clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, delay)
    }
  }

  return { debounce }
}