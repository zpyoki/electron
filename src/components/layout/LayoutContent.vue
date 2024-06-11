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
/* transition: page */
.page-enter-active {
  transition: all 0.5s;
}
.page-leave-active {
  transition: all 0.25s;
  /* transition: all 0.25s ease-out; */
}
.page-enter-from, .page-leave-to {
  transform: translateX(20px);
  opacity: 0.1;
}
</style>