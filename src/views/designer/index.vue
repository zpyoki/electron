<script setup>
import { reactive, ref } from 'vue'

const styleInfo = { height: "740px", width: "100%" }

// const designer = ref(null)
let designer = null

const designerInitialized = (e) => {
  designer = e
  designer.Spread.options.allowExtendPasteRange = true
  // designer.options.allowExtendPasteRange = true
  // designer.value = e
  // console.log(designer)
  // console.log(designer.value)
  // console.log(designer.value.spread).
  // designer.value.spread.options.allowInsertRows = true
  // designer.value.spread.options.allowInsertColumns = true
  // designer.value.spread.options.allowExtendPasteRange = true
}

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
