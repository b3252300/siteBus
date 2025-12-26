<template>
  <el-container class="map-layout">
    <!-- Sidebar -->
    <aside class="map-layout__sidebar">

      <slot name="sidebar" />

    </aside>

    <!-- Map -->
    <el-main class="map-wrapper">
      <slot name="map" />
    </el-main>
  </el-container>
</template>
<script setup lang="ts">
import { useUiStore } from "@/stores/ui";
const sidebar = useUiStore();
</script>

<style scoped>
.map-layout {
  height: 100vh;
}

.map-layout__sidebar {
  z-index: 201;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 1rem;
  left: 5rem;
  height: 95%;
  border-radius: var(--el-border-radius-base);
  transform: translateX(0);
  transition: transform 0.28s ease;
  background: #fff;
  border-right: 1px solid #dcdfe6;
  width: 378px;
 overflow: hidden;
  @media (max-width: 575px) {
    height: 50%;
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
  }
}

.map-layout__main {
  padding: 0;
}
</style>
