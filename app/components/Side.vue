<script lang="ts" setup>
const formData = ref({
  width: 400,
  height: 400,
  backgroundColor: '#fff',
  backgroundImage: '',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
})
</script>

<template>
  <div class="px-10px py-20px">
    <div class="mb-20px text-sm font-bold">
      画布属性
    </div>
    <AForm :model="formData" layout="inline">
      <div grid="~ cols-2">
        <AFormItem field="width" tooltip="宽度小于4k像素大于1像素" label="宽度">
          <AInputNumber
            v-model="formData.width"
            :max="4096"
            :min="1"
            :precision="0"
            placeholder="画布宽度"
          />
        </AFormItem>
        <AFormItem field="height" tooltip="高度小于4k像素大于1像素" label="高度">
          <AInputNumber
            v-model="formData.height"
            :max="4096"
            :min="1"
            :precision="0"
            placeholder="画布高度"
          />
        </AFormItem>
      </div>

      <!-- <div grid="~ cols-2" gap-2 w-full>
        <AButton type="primary" long @click="handleSubmit">
          <template #icon>
            <IconSave />
          </template>
          将当前尺寸保存
        </AButton>
        <AButton type="primary" status="success" long @click="handleSubmit">
          <template #icon>
            <IconApps />
          </template>
          选择尺寸
        </AButton>
      </div> -->
    </AForm>

    <ADivider />

    <div class="mb-20px text-sm font-bold">
      设置证书背景
    </div>
    <AButton type="primary" shape="round">
      <template #icon>
        <IconImage />
      </template>
      上传背景图片
    </AButton>
    <ADivider />
    <div class="mb-20px text-sm font-bold">
      添加元素
    </div>
    <div class="text-[rgba(var(--red-6))]">
      请先上传背景图片
    </div>
  </div>
</template>
