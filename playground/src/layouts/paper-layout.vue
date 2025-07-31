<script setup lang="ts">
import {  } from '@vben/layouts';

</script>

<template>
  <div
    :class="[isDark]"
    class="flex min-h-full flex-1 select-none overflow-x-hidden"
  >
    <template v-if="toolbar">
      <slot name="toolbar">
        <Toolbar :toolbar-list="toolbarList" />
      </slot>
    </template>
  </div>
</template>

<style scoped>

</style>
