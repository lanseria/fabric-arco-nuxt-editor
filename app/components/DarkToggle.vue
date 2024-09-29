<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#222222' : '#ffffff',
  }],
})
function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
onMounted(() => {
  watchEffect(() => {
    const dark = color.preference === 'dark'
    if (dark) {
    // 设置为暗黑主题
      document.body.setAttribute('arco-theme', 'dark')
    }
    else {
    // 恢复亮色主题
      document.body.removeAttribute('arco-theme')
    }
  })
})
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <div class="i-carbon-sun dark:i-carbon-moon" />
  </button>
</template>
