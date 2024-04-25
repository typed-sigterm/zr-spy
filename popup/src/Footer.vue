<script lang="ts" setup>
import { version } from './utils'
import iconGitHub from './assets/github.svg?url'
</script>

<template>
  <NText :depth="3">
    ZR spy · v{{ version }} ·
    <NA href="https://github.com/Zihan-Hu/zr-spy" target="_blank">
      <img style="vertical-align: text-top;" :src="iconGitHub" alt="GitHub">
    </NA>
  </NText>
</template>
