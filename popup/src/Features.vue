<script lang="ts" setup>
import { watch } from 'vue'
import { setRulesetStatus, useStorageValue } from './utils'

async function useFeature(name: string) {
  const ret = await useStorageValue<boolean>(name, true)
  watch(ret, (enabled) => {
    setRulesetStatus(name, enabled)
  }, { immediate: true })
  return ret
}

const bypassPassword = await useFeature('bypass-password')
</script>

<template>
  <NFlex vertical>
    功能设置：
    <NCheckbox v-model:checked="bypassPassword">
      跳过密码输入步骤
    </NCheckbox>
    更改设置后，需要重进 ZR Tracker 才能生效。
  </NFlex>
</template>
