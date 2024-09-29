<script lang="ts" setup></script>

<template>
  <div class="h-68px flex items-center justify-between px-20px shadow">
    <ASpace align="center">
      <img class="mr-10px h-30px w-30px" src="/nuxt.svg" alt="logo">
      <div class="text-size-18px font-bold">
        设置模板
      </div>
      <SourceMode />
    </ASpace>
    <ASpace>
      <AButton shape="round">
        <template #icon>
          <IconBug />
        </template>
        DEBUG
      </AButton>
      <AButton type="primary" shape="round">
        <template #icon>
          <IconBug />
        </template>
        查看保存数据
      </AButton>
      <AButton type="primary" shape="round">
        <template #icon>
          <IconImage />
        </template>
        预览
      </AButton>
      <AButton type="primary" shape="round">
        <template #icon>
          <IconSave />
        </template>
        保存
      </AButton>
    </ASpace>
  </div>
</template>
