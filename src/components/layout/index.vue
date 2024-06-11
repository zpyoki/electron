<script script>
import LayoutHeader from './LayoutHeader.vue'
import LayoutSider from './LayoutSider.vue'
import LayoutContent from './LayoutContent.vue'
</script>


<template>
  <a-layout class='layout'>
    <LayoutHeader />
    <a-layout style='margin-top: var(--px-layout-header-height);'>
      <LayoutSider />
      <LayoutContent />
    </a-layout>
  </a-layout>
</template>

<style scoped>
.layout {
  /* height: 100vh; */
  overflow: auto;
}
</style>