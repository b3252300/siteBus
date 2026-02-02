<template>
  <div class="sidebar" :class="{ active: sidebar.sidebarOpen }">
    <slot name="top"></slot>
    <el-scrollbar v-loading="load.loading" style="padding:0 10px 10px; width:100%">
     
          <slot />
    </el-scrollbar>

  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted, reactive, nextTick } from "vue";
  import { useUiStore } from "@/stores/ui";
  
  const sidebar = useUiStore();


import { useLoadingStore } from "@/stores/useLoading"
  const load = useLoadingStore();


</script>  
<style scoped>
.sidebar {
  height: 100%;
  overflow: hidden;
}
</style>
