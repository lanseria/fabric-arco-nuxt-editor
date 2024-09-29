<template>
  <main class="h-screen flex flex-col font-sans">
    <Header />
    <div class="flex flex-1 shrink grow basis-0 overflow-hidden">
      <!-- 画布区域 -->
      <slot />
      <!-- 属性区域 -->
      <Side class="w-400px" />
    </div>
  </main>
</template>
