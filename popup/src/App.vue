<script lang="ts" setup>
import { zhCN } from 'naive-ui'
import Features from './Features.vue'
import { version } from './utils'
import iconGitHub from './assets/github.svg?url'
</script>

<template>
  <NConfigProvider :locale="zhCN">
    <Suspense>
      <Features />
      <template #fallback>
        <NSkeleton text :repeat="1" />
      </template>
    </Suspense>
    <NDivider style="margin: 8px 0;" />
    <NText :depth="3">
      ZR spy · v{{ version }} ·
      <NA href="https://github.com/Zihan-Hu/zr-spy" target="_blank">
        <img style="vertical-align: text-top;" :src="iconGitHub" alt="GitHub">
      </NA>
    </NText>
  </NConfigProvider>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  width: 300px;
  margin: 8px;
}
</style>
