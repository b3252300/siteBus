<template>
  <el-container class="map-layout">
    <!-- Sidebar -->
    <div class="layout-container">
      <aside class="map-layout__sidebar" :style="{
        width: props.width,
        flex: `0 0 ${props.width}`
      }">

        <slot name="sidebar" />

      </aside>

      <div class="default-container" v-if="slots.default">
        <slot name="default"></slot>
      </div>
    </div>
    <!-- Map -->
    <el-main class="map-wrapper">
      <slot name="map" />
    </el-main>
  </el-container>
</template>
<script setup lang="ts">
import { useUiStore } from "@/stores/ui";
import { useSlots, useAttrs } from 'vue'
const slots = useSlots()
const sidebar = useUiStore();

interface Props {
  width?: String
}

const props = withDefaults(defineProps<Props>(), {


})

</script>

<style lang="scss" scoped>
.map-layout {
  height: 100vh;
}

.layout-container {
  position: fixed;
  top: 1rem;
  left: 5rem;
  max-width: calc(100% - 6rem);
  height: 95%;
  z-index: 1001;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: var(--el-border-radius-base);
  overflow: hidden;
  transform: translateX(0);
  transition: transform 0.28s ease;
  gap: 1rem;
  border-right: 1px solid #dcdfe6;
  display: flex;
  align-items: flex-start;

  justify-content: flex-start;

  @media (max-width: 575px) {
    height: 50vh;
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
    max-width: 100%;
    border-radius: 0;
  }
}

.map-layout__sidebar {
  width: 378px;
  flex: 0 0 378px;


  @media (max-width: 575px) {
    width: 100% !important;
    flex: 0 0 100% !important;
    height: 100%;

    :deep(.el-drawer__header) {
      margin-bottom: 0;
    }
  }
}

.map-layout__main {
  padding: 0;
}
</style>
