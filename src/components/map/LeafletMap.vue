<template>
  <div ref="mapRef" class="leaflet-map"></div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useAuthStore } from "@/stores/auth";

// 圖片資源
import iconUrl from "@/assets/Vector-icon.png?url";
import iconRetinaUrl from "@/assets/Vector-icon-2x.png?url";
import shadowUrl from "@/assets/Vector-shadow.png?url";

const authStore = useAuthStore();
const mapRef = ref(null);
const map = ref(null);
// 定義 marker 變數 (初始為 null)
let marker = null;

const props = defineProps({
  center: { type: Array, default: () => [23.0, 120.2] },
  zoom: { type: Number, default: 12 },
});

// Icon 設定
const CustomIcon = L.Icon.extend({
  options: {
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  },
});
const defaultMarkerIcon = new CustomIcon({
  iconUrl, iconRetinaUrl, shadowUrl
});

/**
 * 產生 HTML 字串的函式
 */
const generateTooltipHTML = (user) => {
  if (!user) return '<div class="tooltipHTML">等待登入...</div>';

  const googlePic = user.google?.picture;
  const fbPic = user.facebook?.picture;
  const hasPic = googlePic || fbPic;

  return `
    <div class="tooltipHTML">
      ${hasPic
      ? `
          <div class="tooltipHTML__img">
            ${googlePic ? `<img src="${googlePic}" class="avatar-img">` : ""}
            ${fbPic ? `<img src="${fbPic}" class="avatar-img" style="margin-left: -10px">` : ""}
          </div>
        `
      : '<div style="font-size:12px; color:gray;">無圖片</div>'
    }
      <span style="font-weight: bold; font-size: 14px; display:block; ">我底加啦!</span>
    </div>
  `;
};

onMounted(() => {
  // 1. 初始化地圖
  map.value = L.map(mapRef.value).setView(props.center, props.zoom);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
  }).addTo(map.value);

  // 2. 建立 Marker
  marker = L.marker(props.center, { icon: defaultMarkerIcon, opacity: 0, interactive: false }).addTo(map.value);

  // 3. ★ 關鍵修正：在 Marker 建立後，直接產生目前的 HTML 並綁定
  // 這樣就不需要依賴 watch 的 immediate，避開 null 問題
  const initialHTML = generateTooltipHTML(authStore.user);
  console.log(authStore.user, "authStore.user");
  if (authStore.user.facebook.id !== null || authStore.user.google.id !== null) {
    marker.bindTooltip(initialHTML, {
      permanent: true,
      direction: "top",
      className: "user-location-tooltip",
      offset: [0, -35],
    }).openTooltip();

  }


});

// 4. 監聽後續變化
watch(
  () => authStore.user,
  (newUser) => {
    // ★ 防呆：再次檢查 marker 是否真的存在
    if (!marker) return;

    console.log("資料更新，更新 Tooltip:", newUser);
    const html = generateTooltipHTML(newUser);
    marker.setTooltipContent(html);
  },
  { deep: true } // ★ 移除 immediate: true，因為初始化已經在 onMounted 做過了
);

defineExpose({ getMap: () => map.value });
</script>
<style scoped>
.leaflet-map {
  width: 100%;
  height: 100%;
}




:deep(.tooltipHTML__img) {
  display: flex;
  justify-content: center;

}

:deep(.user-avatar) {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid white;
  /* 增加白邊讓疊圖比較好看 */
  object-fit: cover;
}
</style>