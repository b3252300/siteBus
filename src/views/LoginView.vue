<template>
<!-- <MapLayout height="44%">

    <template #sidebar>
      
    </template>
        <template #map>
            <LeafletMap ref="mapRef" />
        </template>
</MapLayout> -->
    <LoginCard @login-success="handleLoginSuccess" />
</template>

<script lang="ts" setup>
  import { ref, onMounted, reactive, onUnmounted, nextTick } from "vue";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import LoginCard from "@/components/auth/LoginCard.vue";
import { useAuthStore } from "@/stores/auth";
import LeafletMap from "@/components/map/LeafletMap.vue";
import MapLayout from "@/layouts/components/MapLayout.vue";
const router = useRouter();
const authStore = useAuthStore();
const mapRef = ref<InstanceType<typeof LeafletMap> | null>(null);
const handleLoginSuccess = (userInfo) => {
  // 儲存使用者資訊到 Pinia Store
  if(userInfo){
  authStore.setUser(userInfo);
  router.push({ name: "map" });

    // 顯示成功通知
  ElNotification({
    title: "登入成功",
    message: "即將進入查詢地圖...",
    type: "success",
  });
  }

  

  

};
</script>

<style lang="scss" scoped>
</style>
