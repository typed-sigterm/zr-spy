<script lang="ts" setup>
import { setRulesetStatus } from '~/utils/utils.ts';

setRulesetStatus('bypass-password', true);
</script>

<template>
  <NResult status="success">
    <template #footer>
      你可以前往
      <!-- eslint-disable-next-line -->
      <NA href="http://sshwy.cn/zr/" target="_blank">ZR Tracker</NA>
      查看数据
    </template>
  </NResult>
</template>

<style scoped>
:deep() .n-result-footer {
  margin-top: 8px;
}
</style>
