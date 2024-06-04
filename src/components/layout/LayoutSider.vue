<script setup>
import { reactive, watch, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const state = reactive({
  selectedKeys: [],
  openKeys: []
})

const items = reactive([
  {
    key: 'spread',
    label: '表格'
  },
  {
    key: 'designer',
    label: '设计器'
  },
  {
    key: 'spreadPro',
    label: '表格pro'
  },
  {
    key: 'sub1',
    label: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5'
      },
      {
        key: '6',
        label: 'Option 6'
      }
    ]
  }
])

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