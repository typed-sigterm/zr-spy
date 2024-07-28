<script lang="ts" setup>
import { ref } from 'vue';
import { resetRulesets, useStorageItem } from '~/utils/utils';

defineSlots<{
  default: () => any
}>();

const init = await useStorageItem<boolean>('local:init', { fallback: true });
const show = ref(true);

function handleEnter() {
  resetRulesets();
  init.value = true;
  setTimeout(() => show.value = true, 300);
}
</script>

<template>
  <Transition name="slide">
    <div v-if="show">
      <slot />
    </div>
  </Transition>

  <Transition name="slide">
    <NFlex v-if="!init" vertical>
      <NAlert type="warning" title="声明">
        本项目仅供学习交流使用，禁止用于非法用途！<br>
        根据 GPL 协议，在任何情况下，ZR spy 开发者不对任何因使用 ZR spy 而发生的任何间接性、后果性、惩戒性、偶然性、特殊性的损害承担责任。
      </NAlert>
      <NButton type="primary" @click="handleEnter">
        进入 ZR spy
      </NButton>
    </NFlex>
  </Transition>
</template>
