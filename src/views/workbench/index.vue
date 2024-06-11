<script setup>
import { UserOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <a-flex wrap="wrap" gap="small">
      <RouterLink to="/emolument">
        <a-avatar shape='square' size='large' style='background-color: #1890ff'>¥</a-avatar>
      </RouterLink>
      <RouterLink to="/employee">
        <a-avatar shape='square' size='large' style='background-color: #1890ff'>
          <template #icon><UserOutlined /></template>
        </a-avatar>
      </RouterLink>
    </a-flex>
  </div>
</template>

<style scoped>

</style>