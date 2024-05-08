<script setup>
import { reactive, ref } from 'vue'

const styleInfo = { height: "600px", width: "100%" }

const designer = ref(null)

const designerInitialized = (e) => {
  designer.value = e.designer
}

const dataTable = reactive([
  {
    name: '张三',
    age: 18,
    gender: '男',
  },
  {
    name: '李四',
    age: 20,
    gender: '男',
  },
  {
    name: '王五',
    age: 22,
    gender: '男',
  },
])

</script>

<template>
  <div>
    <GcDesigner :styleInfo="styleInfo"
      @designerInitialized="designerInitialized"
    >
    </GcDesigner>
  </div>
</template>

<style scoped>

</style>
