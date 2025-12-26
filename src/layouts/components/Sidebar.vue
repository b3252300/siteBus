<template>
  <div class="sidebar-container">
    <div class="menu-list">
      <div class="menu-list__item" @click="handleSortOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined"> search_insights </span>
        </div>

        <div>路線站序</div>
      </div>
      <div class="menu-list__item" @click="handleOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined"> search_insights </span>
        </div>

        <div>路線站序</div>
      </div>
      <div class="menu-list__item" @click="handleMapSearchOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined"> explore_nearby </span>

        </div>

        <div>站位查詢</div>
      </div>

      <el-popover placement="right" :width="150" trigger="click">
        <template #reference>
          <div class="menu-list__item" @click="handleExplainOpen">
            <div class="menu-list__icon">
              <span class="material-symbols-outlined">layers</span>

            </div>

            <div>其他資訊</div>
          </div>
        </template>

      </el-popover>


    </div>
  </div>
</template>
<script lang="ts" setup>

import router from "@/router";
import { useUiStore } from "@/stores/ui";
const sidebar = useUiStore();
const handleOpen = () => {

  // 呼叫 store 的 action 來開啟側欄
  router.push({ path: "/map" });
  if (!sidebar.sidebarOpen) {
    sidebar.openSidebar();
  }


};
const handleMapSearchOpen = () => {

  // 呼叫 store 的 action 來開啟側欄
  router.push({ path: "/mapSearch" });
  if (!sidebar.sidebarOpen) {
    sidebar.toggleSidebar();
  }

}
const handleSortOpen = () => {
    router.push({ path: "/mapRoute" });
  // if (!sidebar.sidebarOpen) {
  //   sidebar.toggleSidebar();
  // }
}

const handleExplainOpen = () => {
  router.push({ path: "/explain" });
}
</script>
<style scoped lang="scss">
.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 72px;
  height: 100vh;
  background: #f5f5f5;
  z-index: 101;
}

.menu-list {
  font-size: 12px;
  text-align: center;
  display: grid;
  justify-content: center;
  padding-top: 3rem;
  gap: 1.6rem;
}

.menu-list__item {
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus {
    .menu-list__icon {
      background: #ddd;
    }
  }
}

.menu-list__icon {

  width: 48px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}
</style>
