<script setup>
import { reactive, watch, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import adminMenu from '@/router/admin'

const router = useRouter()
const route = useRoute()

const state = reactive({
  selectedKeys: [],
  openKeys: []
})

const items = reactive(adminMenu.map(item => {
  return {
    key: item.name,
    label: item.meta.title
  }
}))

function jump (item) {
  router.push({ name: item.key })
}

watch(() => route.name, (val) => {
  state.selectedKeys = [val]
}, { immediate: true })
</script>

<template>
  <a-layout-sider class='dragable' width="200" style="background: #fff">
    <a-menu class='dragless'
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      :items="items"
      @select="jump"
    >
    </a-menu>
  </a-layout-sider>
</template>