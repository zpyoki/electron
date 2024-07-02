import { useEventListener } from '@/hooks/event/useEventListener'


export function useKeyboard(eventType, fn) {
  useEventListener(window, eventType, fn)
}