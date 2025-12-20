import { ref } from "vue";
import { defineStore } from "pinia";


export const useUiStore = defineStore("ui", () => {
  // 狀態：側欄是否開啟
  const sidebarOpen = ref(false);

  // Action：開啟側欄
  function openSidebar() {
    sidebarOpen.value = true;
  }

  // Action：關閉側欄
  function closeSidebar() {
    sidebarOpen.value = false;
  }

  // Action：切換側欄
  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
  }

  return { sidebarOpen, openSidebar, closeSidebar, toggleSidebar };
});
