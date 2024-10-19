<script lang="ts" setup>
import iconGitHub from '~/assets/github.svg?url';
import { version } from '~/utils/utils';
</script>

<template>
  <NText :depth="3">
    ZR spy ·
    <NA href="https://github.com/typed-sigterm/zr-spy/blob/main/CHANGELOG.md" target="_blank">
      v{{ version }}
    </NA>
    ·
    <NA href="https://github.com/typed-sigterm/zr-spy" target="_blank">
      <img style="vertical-align: text-top;" :src="iconGitHub" alt="GitHub">
    </NA>
  </NText>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
