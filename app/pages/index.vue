<script setup lang="ts">
const WrapRef = useTemplateRef('WrapRef')
const CanvasRef = useTemplateRef('CanvasRef')

const { canvas, resizeCanvas } = useCanvas(CanvasRef)
const { initWorkspace, resizeWorkspace, zoomToFit } = useWorkspace(canvas)

const canvasProps = ref({
  width: 800,
  height: 600,
})

onMounted(() => {
  if (canvas.value) {
    initWorkspace(canvasProps.value.width, canvasProps.value.height)
    handleResize()
  }
})

function handleResize() {
  if (WrapRef.value) {
    const { clientWidth, clientHeight } = WrapRef.value
    resizeCanvas(clientWidth, clientHeight)
    zoomToFit(clientWidth, clientHeight)
  }
}

watch(() => canvasProps.value, (newProps) => {
  resizeWorkspace(newProps.width, newProps.height)
  handleResize()
}, { deep: true })

// 使用 ResizeObserver 监听容器大小变化
onMounted(() => {
  if (WrapRef.value) {
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(WrapRef.value)
  }
})
</script>

<template>
  <div ref="WrapRef" class="shrink grow basis-0 overflow-hidden bg-[#f1f1f1]">
    <div class="relative h-full w-full">
      <div class="pointer-events-none absolute z-10 h-full w-full shadow-[inset_0_0_9px_2px_#0000001f]" />
      <canvas ref="CanvasRef" />
    </div>
  </div>
</template>
