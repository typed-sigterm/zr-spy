<script lang="ts" setup>
import { watch } from 'vue';
import { setRulesetStatus, useStorageItem } from '~/utils/utils';

const enabled = await useStorageItem<boolean>('local:enabled', { fallback: true });
watch(enabled, (enabled) => {
  setRulesetStatus('bypass-password', enabled);
}, { immediate: true });
</script>

<template>
  <NForm inline label-placement="left" :show-feedback="false">
    <NFormItem label="跳过密码输入步骤">
      <NSwitch v-model:value="enabled" />
    </NFormItem>
  </NForm>
</template>
