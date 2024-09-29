import type { ShallowRef } from 'vue'
import { Canvas } from 'fabric'

export function useCanvas(canvasRef: ShallowRef<HTMLCanvasElement | null>) {
  const canvas = ref<Canvas>()

  const initCanvas = () => {
    if (canvasRef.value) {
      canvas.value = new Canvas(canvasRef.value, {
        preserveObjectStacking: true,
        fireRightClick: true,
        stopContextMenu: true,
        controlsAboveOverlay: true,
      })
    }
  }

  const resizeCanvas = (width: number, height: number) => {
    if (canvas.value) {
      canvas.value.setDimensions({ width, height })
      // Additional logic for resizing workspace, etc.
    }
  }

  onMounted(() => {
    initCanvas()
  })

  watchEffect(() => {
    // Handle canvas resize logic here
  })

  return {
    canvas,
    initCanvas,
    resizeCanvas,
  }
}
