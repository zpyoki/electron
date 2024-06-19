<script setup>
import { ref, onMounted } from 'vue'
import { useGet } from '@/hooks/http/useHttp'

let spread = null
const dataSource = ref([])
const [employeeRes, getEmployeeList] = useGet('/employee?pageNum=1&pageSize=10')

onMounted(async () => {
  await getEmployeeList()
  const { resp } = employeeRes
  if (resp.value.code === 0) {
    dataSource.value = resp.value.data
    const activeSheet = spread.getActiveSheet()
    activeSheet.autoGenerateColumns = false
    // activeSheet.autoGenerateColumns = true
    activeSheet.setDataSource(dataSource.value)
    var colInfos = [
                {
                    name: 'code',
                    displayName: '年度111',
                    size: 100
                },
                {
                    name: 'dept',
                    displayName: '中铁大桥局',
                    size: 100
                },
                {
                    name: 'ic',
                    displayName: '中铁4局',
                    size: 100
                },
                {
                    name: 'jtime',
                    displayName: '备注',
                    size: 100
                },
                {
                    name: 'name',
                    displayName: '数量',
                    size: 100
                }
            ]
    activeSheet.bindColumns(colInfos)
    activeSheet.addColumns(colInfos.length, 300)
    activeSheet.addRows(dataSource.value.length, 50)
    // activeSheet.autoFitColumn(1)
    const res = activeSheet.getDataSource()
    // console.log(res)
    // console.log(activeSheet.getRange(0, 0))
    // console.log(activeSheet.getText(1, 0))
    // console.log(activeSheet.getUsedRange(GC.Spread.Sheets.UsedRangeType.all))
    // console.log(GC.Spread.Sheets.UsedRangeType)
    // protect
    // activeSheet.options.isProtected = true
    // let password = "123"
    // activeSheet.protect(password)
    // activeSheet.unprotect(password)
    // search
    // var searchCondition = new GC.Spread.Sheets.Search.SearchCondition();
    // searchCondition.searchString = "周前锋";
    // var searchresult= activeSheet.search(searchCondition);
    // console.log(searchresult)
    // var style = new GC.Spread.Sheets.Style();
    // style.backColor = 'red';
    // activeSheet.getCell(searchresult.foundRowIndex, searchresult.foundColumnIndex).setStyle(style)
    // qrcode
    // activeSheet.setFormula(10, 5, '=BC_QRCODE(B2)')
    activeSheet.setActiveCell(30, 30, GC.Spread.Sheets.VerticalPosition.top, GC.Spread.Sheets.HorizontalPosition.left)
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