<script setup>
import { UserOutlined, LaptopOutlined } from '@ant-design/icons-vue'
</script>


<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      v-model:selectedKeys="selectedKeys2"
      v-model:openKeys="openKeys"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <user-outlined />
            subnav 1
          </span>
        </template>
        <a-menu-item key="1">option1</a-menu-item>
        <a-menu-item key="2">option2</a-menu-item>
        <a-menu-item key="3">option3</a-menu-item>
        <a-menu-item key="4">option4</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <laptop-outlined />
            subnav 2
          </span>
        </template>
        <a-menu-item key="5">option5</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>