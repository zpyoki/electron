<script script>
import LayoutHeader from './LayoutHeader.vue'
import LayoutSider from './LayoutSider.vue'
import LayoutContent from './LayoutContent.vue'
</script>


<template>
  <a-layout>
    <LayoutHeader />
    <a-layout>
      <LayoutSider />
      <LayoutContent />
    </a-layout>
  </a-layout>
</template>

<style scoped>

</style>