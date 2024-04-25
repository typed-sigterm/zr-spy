<script lang="ts" setup>
import { zhCN } from 'naive-ui'
import Features from './Features.vue'
import Footer from './Footer.vue'
import WithInitCaution from './WithInitCaution.vue'
</script>

<template>
  <NConfigProvider :locale="zhCN">
    <Suspense>
      <WithInitCaution>
        <Features />
        <NDivider style="margin: 8px 0;" />
        <Footer />
      </WithInitCaution>
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

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s, opacity 0.3s;
}

.slide-enter-active {
  transition-timing-function: ease-out;
}
.slide-leave-active {
  transition-timing-function: ease-in;
}

.slide-enter-from, .slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
