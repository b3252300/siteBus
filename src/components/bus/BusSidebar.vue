<template>
  <div class="sidebar" :class="{ active: sidebar.sidebarOpen }">
    <slot />
  </div>
</template>
<script setup lang="ts">
  import { useUiStore } from "@/stores/ui";
  const sidebar = useUiStore();
</script>  
<style scoped>
.sidebar {
  height: 100%;
  overflow: hidden;
}
</style>
