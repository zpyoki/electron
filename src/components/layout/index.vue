<script setup>
import { onMounted, onUnmounted } from 'vue'
import LayoutHeader from './LayoutHeader.vue'
import LayoutSider from './LayoutSider.vue'
import LayoutContent from './LayoutContent.vue'
import Lock from '@/components/lock/index.vue'
import { useLockStore } from '@/store/lock'
import { useKeyboard } from '@/hooks/event/useKeyboard'

const lockStore = useLockStore()

useKeyboard('keydown', (event) => {
  if (event.ctrlKey && event.key === 'l') {
    if (!lockStore.locked) lockStore.confirmLock()
  }
})
</script>

<template>
  <a-layout class='layout'>
    <LayoutHeader />
    <a-layout style='margin-top: var(--px-layout-header-height);'>
      <LayoutSider />
      <LayoutContent />
    </a-layout>
  </a-layout>
  <Transition name="lock" mode="out-in">
    <Lock v-if='lockStore.locked' @close="lockStore.confirmLock" @cancel="lockStore.cancelLock" />
  </Transition>
</template>

<style scoped>
.layout {
  /* height: 100vh; */
  overflow: auto;
}
</style>