<script lang="ts" setup>
import { watch } from 'vue'
import { setRulesetStatus, useStorageValue } from './utils'

const bypassPassword = await useStorageValue<boolean>('bypass-password', true)
watch(bypassPassword, (enabled) => {
  setRulesetStatus('bypass-password', enabled)
}, { immediate: true })
</script>

<template>
  <NForm inline label-placement="left" :show-feedback="false">
    <NFormItem label="跳过密码输入步骤">
      <NSwitch v-model:value="bypassPassword" />
    </NFormItem>
  </NForm>
</template>
