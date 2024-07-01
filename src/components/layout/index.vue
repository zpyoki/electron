<script setup>
import LayoutHeader from './LayoutHeader.vue'
import LayoutSider from './LayoutSider.vue'
import LayoutContent from './LayoutContent.vue'
import Lock from '@/components/lock/index.vue'
import { useBaseStore } from '@/store/base'

const baseStore = useBaseStore()
</script>

<template>
  <a-layout class='layout'>
    <LayoutHeader />
    <a-layout style='margin-top: var(--px-layout-header-height);'>
      <LayoutSider />
      <LayoutContent />
    </a-layout>
  </a-layout>
  <Transition name="page" mode="out-in">
    <Lock v-if='baseStore.locked' />
  </Transition>
</template>

<style scoped>
.layout {
  /* height: 100vh; */
  overflow: auto;
}
/* transition: page */
.page-enter-active {
  transition: all 0.5s;
}
.page-leave-active {
  transition: all 0.25s;
  /* transition: all 0.25s ease-out; */
}
.page-enter-from, .page-leave-to {
  transform: translateX(20px);
  opacity: 0.1;
}
</style>