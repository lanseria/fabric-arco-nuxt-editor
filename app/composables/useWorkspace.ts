// composables/useWorkspace.ts

import type { Canvas } from 'fabric'
import type { Ref } from 'vue'
import { Rect } from 'fabric'

export function useWorkspace(canvas: Ref<Canvas | undefined>) {
  const workspaceId = 'WORKSPACE_ID'
  const workspace = computed(() => {
    return canvas.value?.getObjects().find((item: any) => item.id === workspaceId) as Rect | undefined
  })

  const initWorkspace = (width: number, height: number) => {
    if (!canvas.value)
      return
    const workspaceObject = new Rect({
      fill: 'rgba(255,255,255,1)',
      width,
      height,
      left: canvas.value.width! / 2,
      top: canvas.value.height! / 2,
      // originX: 'center',
      // originY: 'center',
      id: workspaceId,
      selectable: false,
      hasControls: false,
      hoverCursor: 'default',
    })

    canvas.value.add(workspaceObject)
    canvas.value.renderAll()
  }

  const resizeWorkspace = (width: number, height: number) => {
    if (workspace.value) {
      workspace.value.set({
        width,
        height,
        left: canvas.value!.width! / 2,
        top: canvas.value!.height! / 2,
      })
      canvas.value?.renderAll()
    }
  }

  const zoomToFit = (canvasWidth: number, canvasHeight: number) => {
    if (!canvas.value || !workspace.value)
      return

    const workspaceAspectRatio = workspace.value.width! / workspace.value.height!
    const canvasAspectRatio = canvasWidth / canvasHeight

    let scale
    if (workspaceAspectRatio > canvasAspectRatio) {
      scale = (canvasWidth / workspace.value.width!) * 0.9
    }
    else {
      scale = (canvasHeight / workspace.value.height!) * 0.9
    }

    canvas.value.setZoom(scale)
    canvas.value.setDimensions({ width: canvasWidth, height: canvasHeight })

    const objCenter = workspace.value.getCenterPoint()
    const viewportTransform = canvas.value.viewportTransform
    if (canvas.value.width === undefined || canvas.value.height === undefined || !viewportTransform)
      return
    viewportTransform[4] = canvas.value.width / 2 - objCenter.x * viewportTransform[0]
    viewportTransform[5] = canvas.value.height / 2 - objCenter.y * viewportTransform[3]
    canvas.value.setViewportTransform(viewportTransform)
    canvas.value.renderAll()
  }

  return {
    workspace,
    initWorkspace,
    resizeWorkspace,
    zoomToFit,
  }
}
