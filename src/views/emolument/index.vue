<script setup>
import { ref } from 'vue'

const saerchValue = ref('')
const searchType = ref('name')


const data = [
  {
    title: 'Ant Design',
  },
  {
    title: 'Ant Design',
  },
  {
    title: 'Ant Design',
  }
]
</script>

<template>
  <div class='basic-page'>
    <div>
      <a-input v-model:value="saerchValue">
        <template #addonBefore>
          <a-select v-model:value="searchType" style="width: 90px">
            <a-select-option value="name">名称</a-select-option>
            <a-select-option value="favorite">收藏</a-select-option>
          </a-select>
        </template>
      </a-input>
    </div>
    <a-list item-layout="vertical" :data-source="data">
    <!-- <a-list :data-source="data"> -->
      <template #renderItem="{ item }">
        <a-list-item>
          <template #actions>
            <a>more</a>
          </template>
          <!-- <template #extra>
            <div>2024-06</div>
          </template> -->
          <a-list-item-meta>
            <template #title>
              <div>某某某（管理信息化事业部）</div>
            </template>
            <template #description>
              <div>2024-06</div>
            </template>
          </a-list-item-meta>
          <!-- 内容 -->
          <div style='display: flex;justify-content: space-between;'>
            <a-statistic title="合计" :value="12893" prefix='¥' />
            <a-statistic title="基础" :value="12893" prefix='¥' />
            <a-statistic title="绩效" :value="12893" prefix='¥' />
          </div>
          <!-- {{ item.title + '===content' }} -->
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style scoped>
.basic-page {
  background: #fff;
  padding: 16px;
}
</style>