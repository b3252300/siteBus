<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue';
import liff from '@line/liff';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

// 將 LIFF ID 改放到 env 為佳
const LINE_LIFF_ID = import.meta.env.VITE_LINE_LIFF_ID;

onMounted(() => {
  // 在 app 啟動時載入 LIFF SDK，並在初始化成功後若已登入則抓取 profile 更新到 Pinia
  const loadLiff = () => {
    // 若已經有 liff（例如被其它模組 import），直接 init
    const runInit = async () => {
      try {
        await liff.init({ liffId: LINE_LIFF_ID });
        if (liff.isLoggedIn()) {
          try {
            const profile = await liff.getProfile();
            // 合併現有 store 的 google/facebook，僅更新 line 欄位
            authStore.setUser({
              google: authStore.user.google,
              facebook: authStore.user.facebook,
              line: {
                id: profile.userId,
                name: profile.displayName,
                picture: profile.pictureUrl,
              },
            });
          } catch (e) {
            console.error('LIFF getProfile error', e);
          }
        }
      } catch (err) {
        console.error('LIFF init failed', err);
      }
    };

    if (typeof liff !== 'undefined' && liff) {
      runInit();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://static.line-scdn.net/liff/edge/2/sdk.js';
    script.async = true;
    script.onload = () => {
      runInit();
    };
    document.head.appendChild(script);
  };

  loadLiff();
});
</script>