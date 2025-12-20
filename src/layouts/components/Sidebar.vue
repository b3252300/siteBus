<template>
  <div class="sidebar-container">
    <div class="menu-list">
      <div class="menu-list__item" @click="handleOpen">
        <div class="menu-list__icon">
              <span class="material-symbols-outlined"> search_insights </span>
        </div>
      
        <div>查詢站點</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

import { useUiStore } from "@/stores/ui";

const handleOpen = (event) => {
  const ui = useUiStore();
  // 呼叫 store 的 action 來開啟側欄
  ui.toggleSidebar();
};

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
}
.menu-list__item {
  text-align: center;
  cursor: pointer;
  &:hover, &:focus{
    .menu-list__icon{
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
