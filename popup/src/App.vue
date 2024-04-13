<script lang="ts" setup>
import { zhCN } from 'naive-ui'
import Features from './Features.vue'
</script>

<template>
  <NConfigProvider :locale="zhCN">
    <Suspense>
      <template #default>
        <Features />
      </template>
      <template #fallback>
        <NSkeleton text :repeat="1" />
      </template>
    </Suspense>
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
