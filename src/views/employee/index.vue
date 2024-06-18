<script setup>
import { ref, onMounted } from 'vue'
import { useGet } from '@/hooks/http/useHttp'

let spread = null
const dataSource = ref([])
const [employeeRes, getEmployeeList] = useGet('/employee')

onMounted(async () => {
  await getEmployeeList()
  const { resp } = employeeRes
  if (resp.value.code === 0) {
    dataSource.value = resp.value.data
  } else {
    console.log(resp.value.msg)
  }
  console.log(dataSource.value)
})

function initialized (value) {
  spread = value
  getDatas()
}

function getDatas () {

  // spread.suspendPaint()
  // spread.fromJSON(dataSource.value)
  // spread.resumePaint()
}
</script>

<template>
  <div class='basic-page'>
    <!-- <div>
      <a-input></a-input>
    </div> -->
    <GcSpreadSheets :hostClass='"spreadHost"' @workbookInitialized='initialized'>
      <!-- <GcWorksheet :dataSource="dataSource"/> -->
    </GcSpreadSheets>
  </div>
</template>

<style scoped>
.basic-page {
  height: 100%;
  background: #fff;
  padding: var(--px-gap-2);
}
.spreadHost {
  width: 100%;
  height: 100%;
}
</style>