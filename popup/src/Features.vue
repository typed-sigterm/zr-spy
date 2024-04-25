<script lang="ts" setup>
import { watch } from 'vue'
import { setRulesetStatus, useStorageValue } from './utils'

const bypassPassword = await useStorageValue<boolean>('bypass-password', true)
watch(bypassPassword, (enabled) => {
  setRulesetStatus('bypass-password', enabled)
})
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
