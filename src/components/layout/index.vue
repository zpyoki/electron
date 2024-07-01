<script setup>
import LayoutHeader from './LayoutHeader.vue'
import LayoutSider from './LayoutSider.vue'
import LayoutContent from './LayoutContent.vue'
import Lock from '@/components/lock/index.vue'
import { useLockStore } from '@/store/lock'

const lockStore = useLockStore()
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