<script setup>
import '@grapecity-software/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
import "@grapecity-software/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css"
import * as GC from "@grapecity-software/spread-sheets"
import "@grapecity-software/spread-sheets-print"
import "@grapecity-software/spread-sheets-shapes"
import "@grapecity-software/spread-sheets-slicers"
import "@grapecity-software/spread-sheets-pivot-addon"
import "@grapecity-software/spread-sheets-tablesheet"
// import "@grapecity-software/spread-sheets-ganttsheet"
// import "@grapecity-software/spread-sheets-reportsheet-addon"
import "@grapecity-software/spread-sheets-formula-panel"
import "@grapecity-software/spread-sheets-io"
import '@grapecity-software/spread-sheets-resources-zh'
import '@grapecity-software/spread-sheets-designer-resources-cn'
import "@grapecity-software/spread-sheets-designer"
import config from '@/utils/config'

GC.Spread.Sheets.Designer.LicenseKey = config.spreadDesignerLicenseKey
GC.Spread.Sheets.LicenseKey = config.spreadSheetLicenseKey
GC.Spread.Common.CultureManager.culture("zh-cn")
window.GC = GC
</script>

<template>
  <a-config-provider>
    <RouterView />
  </a-config-provider>
</template>

<style>
.dragable {
  user-select: none;
  -webkit-app-region: drag;
}
.dragless {
  -webkit-app-region: no-drag;
}
</style>
