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
  <NForm inline label-placement="left" :show-feedback="false">
    <NFormItem label="跳过密码输入步骤">
      <NSwitch v-model:value="bypassPassword" />
    </NFormItem>
  </NForm>
</template>
