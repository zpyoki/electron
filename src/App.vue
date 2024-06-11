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

GC.Spread.Sheets.Designer.LicenseKey = 'openapi.enfi.com.cn,356493421138187#B1wF9QRFGOUZVQpRjW7cHMIR6aFpHShNWQNJ5NxEjYwl5T03UYyYnMOVlbkBlVxFWSkNFOWNWMzgWUkJDOwlnchlHZzMDeyBzZzYkM8kme5UXWjJnTNhVSatkQtpmUHBlSzole6p6MWJjNGlmQQJ5Kx44SNFkTz2SM4EmUwsSah34V7JlYwM6MhxmRlplZ9FXYtZnbv2yKthzKxEHa9JEU7RGSw3mb5MFelZlSup7YF3Wc8YlQ5ZWOw2iYRVDayQUYkpUOaRTZ4NGZ8lTR4gVUmxkdRJEWyEnYVhFca5Wd7c4NvkkSVl5N49UOwMmRl5GWqdUR6FUUrIVREN4KDlXTiojITJCLiUkRFNTM5IUNiojIIJCL4IDMwcTMyUzM0IicfJye#4Xfd5nITdlM4IiOiMkIsIyNx8idg86bkRWQtIXZudWazVGRtMlSkFWZyB7UiojIOJyebpjIkJHUiwiIyIDNyEDMgYDM6ADNyAjMiojI4J7QiwiIwIjNwQjMwIjI0ICc8VkIsIibj9SbvNmLpZmbl9SawFmblB7biojIz5GRiwiI8+Y9sWY9QmZ0Jyp9vyp9Aqo9Li09leb9y+I0pGo93uZ9tiL9iojIh94QiwiI7gTM8MTMxIDNzkDN6UzMiojIklkI1pjIEJCLi4TPRRHW8FXMnFWYhlXaNVDdIp6L9AzNmVGUvF5aJN5dxZHVQ3iQycEW4xkYEZTMGRWQRFmUlRlV9FFTxE7d4xmT8smTQZVVzAlR6AFV6ZkaKFXW6h4cKsYb'
GC.Spread.Sheets.LicenseKey = 'openapi.enfi.com.cn,273981382885329#B1VSxhzMCR5ZvgWZ4cjeJt6Zkx6amJlQMJ4aN9WVsdXMkd6b45mN7BFTZJnVMZWe45kQTFXQwkjSjtSbpdjTkNVUn3SZmd5MYRGehVGblFDNVxmQ9dnVI54U7p7T05mQk9WUxZXTw3SaIdjT5YnV8pVdWlDMBxkMLtWUvATY8J5dyMXM4MWZyQER7NjdlBDav9GdstWSyd4Nx56a8hzKphUaullQlJFVVVFb5c6azw6KKdTQD3Wd6ImaxlUOqd7SFVTWXRzY7AFNj5URttUU6wUU0NHMLZGUhxGNS5kWy8UWkVjauhXOD3yKWh5LE5EO9tmch3ke5VHZYJGRyhXMjBHRwc5NhBHZvZVUyNTUTJiOiMlIsICMzYUN9QUNyIiOigkIsgzNwUTN8kDO0IicfJye=#Qf35VfiUVQLFlI0IyQiwiI7EjL6ByUKBCZhVmcwNlI0IiTis7W0ICZyBlIsISMyQjMxADI6AjNwQjMwIjI0ICdyNkIsICMyYDM4IDMyIiOiAHeFJCLi86Yu46bj9Sam9WZukGch9WZw3mI0IyctRkIsICuPWOrFWOkZmeica+rcaOgKa+ioeep7WusPieqBaevbWer8SuI0ISYONkIsISOyMTN8gjM8MTM8kzM7IjI0ICZJJCL35lIlxmYhRFdvZXaQJyW0IyZsZmIsU6csFmZ0IiczRmI1pjIs9WQisnOiQkIsISP3EET4cXTsFmM5l5a03SaN94NGJHTalkU4U6cYdDVJNUOElTSWpVRrsUWNBXOvUWOQRmNDhzM54mSOJGcTx6cNpGUL3SSTpZY4g'
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
