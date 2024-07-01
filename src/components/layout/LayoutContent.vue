<template>
  <a-layout style="padding: var(--px-gap-2);height: calc(100vh - var(--px-layout-header-height));overflow: auto;">
    <a-layout-content>
      <RouterView v-slot='{ Component }'>
        <Transition name="page" mode="out-in">
          <component :is='Component' />
        </Transition>
      </RouterView>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>
</style>