<template>

  <MapLayout>

    <template #sidebar>
      <BusSidebar>
        <template #top>

          <div ref="titleRef" v-for="item in title?.Networks" :key="item.SubRouteUID" class="title-container">
            <h2 class="title-container__label">
              {{ item.NetworkName.Zh_tw }}
            </h2>
            <div class="title-container__sublabel">
              {{ item.NetworkName.En }}
            </div>
          </div>

          <!-- 去 / 回程 -->
          <div ref="controlRef" class="control-container">
            <el-radio-group v-model="vaildControl" size="small" @change="handleControl">
              <el-radio-button label="去程" value="go" type="success" />
              <el-radio-button label="往返" value="back" type="success" />
            </el-radio-group>

            <el-text v-if="estimatedTime" v-loading="loadEstimatedTime" :key="estimatedTime"
              :class="['text-estimatedTime', styleEstimatedTime]">
              <img src="@/assets/icon-bus.svg">{{ estimatedTime }}</el-text>

          </div>
          <div style="padding:10px 10px 0;">
            <el-input v-model="searchDate" class="responsive-input" placeholder="請搜尋"
            @change="handleSearch">
              <template #suffix>
                <el-icon class="el-input__icon">
                  <search />
                </el-icon>
              </template>
            </el-input>
          </div>

        </template>


        <!-- 路線 / 站牌 -->
        <el-scrollbar v-loading="load.loading" :style="{ 'height': customHeight }">


          <div class="list-container">
            <el-empty v-if="!loading && stopCityList.length === 0" description="附近無資料" />

            <el-card v-for="(route, routeIndex) in stopCityList" :key="route.SubRouteUID">
              <h3 class="label_style" @click="toggleShowLine(routeIndex)">
                <span v-html="highlight(route.SubRouteName.Zh_tw, searchKeyword)"></span>
                <span class="text-unit">
                  {{ directionText(route.Direction) }}
                </span>
              </h3>

              <div v-show="showLine[routeIndex]" class="stop__line">
                <div v-for="(stop, stopIndex) in route.Stops" :key="stop.StopUID" :class="[
                  'location-top',
                  { active: activeStopUID === stop.StopUID },
                ]" @click="flyToStop(stop)">
                  <strong>{{ stop.StopSequence }}</strong>
                  <span class="stop-name" v-html="highlight(stop.StopName.Zh_tw, searchKeyword)"></span>
                </div>
              </div>
            </el-card>
          </div>

        </el-scrollbar>
      </BusSidebar>
    </template>


    <template #map>
      <LeafletMap ref="mapRef" />
    </template>
  </MapLayout>
</template>

<script setup>

import { ref, onMounted, onUnmounted, nextTick } from "vue";
import L from "leaflet";

import MapLayout from "@/layouts/components/MapLayout.vue";
import LeafletMap from "@/components/map/LeafletMap.vue";
import BusSidebar from "@/components/bus/BusSidebar.vue";

import tdxRequest from "@/api/tdxApi";
import soonVectorSvg from "@/assets/soon-vector.svg";
import iconUrl from "@/assets/Vector-icon.png?url";
import iconRetinaUrl from "@/assets/Vector-icon-2x.png?url";
import shadowUrl from "@/assets/Vector-shadow.png?url";
import { useLoadingStore } from "@/stores/useLoading"
const load = useLoadingStore();
const estimatedTime = ref(null);
const loadEstimatedTime = ref(false);
const styleEstimatedTime = ref(null);


const mapRef = ref(null);
const map = ref(null);

const loading = ref(true);
const title = ref(null);

const allStopCityList = ref([]);
const stopCityList = ref([]);
const showLine = ref([]);

const vaildControl = ref("go");
const activeStopUID = ref(null);

const busMarkersMap = new Map();
const markersMap = new Map();
const searchDate = ref("");
const searchKeyword = ref(""); // 儲存目前要 highlight 的關鍵字

// 用於「即將到站」要突顯的 icon
const highlightIcon = L.icon({
  iconUrl: soonVectorSvg,
  shadowUrl,
  iconSize: [36, 46], // 比一般大一點作突顯
  iconAnchor: [18, 46],
  popupAnchor: [0, -40],
});


onMounted(async () => {
  map.value = mapRef.value.getMap();
  await initData();
});


async function initData() {


  try {
    load.openLoading();
    await Promise.all([fetchNetwork(), fetchStopOfRoute()]);
    applyDirectionFilter();
  } catch { } finally {
    load.closeLoading();
  }


}

/* ================= API ================= */




function fetchNetwork() {
  return tdxRequest
    .get("/Bus/Network/City/Tainan?%24format=JSON")
    .then(res => {
      title.value = res.data;
    });
}


//即將到站的動態顯示
function estimatedTimeOfArrival(stopUID) {
  loadEstimatedTime.value = true;
  return tdxRequest
    .get("/Bus/EstimatedTimeOfArrival/City/Tainan?%24format=JSON")
    .then(res => {
      console.log(res.data, "estimatedTimeOfArrival");
      const { N1Datas } = res.data;
      let found = false;
      N1Datas.forEach(item => {
        if (item.StopUID === stopUID) {
          found = true;
          estimatedTime.value = formatEstimateTime(item.EstimateTime);
          styleEstimatedTime.value = getEstimateType(item.EstimateTime);
          console.log(item, "item");
          // 根據這次的預估時間只更新該停靠站的 marker（只替換「即將到站」）
          updateMarkerForEstimate(stopUID, item.EstimateTime);
        }
      });
      if (!found) {
        // 如果沒有資料，確保復原該站的標記
        updateMarkerForEstimate(stopUID, null);
      }
    })
    .catch(() => {
      estimatedTime.value = "請求過快，請稍後";
      styleEstimatedTime.value = null;
    })

    .finally(() => {
      loadEstimatedTime.value = false;
    });
}
function fetchStopOfRoute() {
  return tdxRequest
    .get("/Bus/StopOfRoute/City/Tainan?%24format=JSON")
    .then(res => {
      allStopCityList.value = res.data.StopOfRoutes || [];
      // 站牌依序排序
      allStopCityList.value.forEach(route => {
        route.Stops = [...route.Stops].sort(
          (a, b) => a.StopSequence - b.StopSequence
        );
      });
    });
}

/* ================= sidebar ================= */
function handleControl() {
  clearAllMarkers();
  applyDirectionFilter();
}

function applyDirectionFilter() {
  stopCityList.value =
    vaildControl.value === "go"
      ? allStopCityList.value.filter(i => i.Direction === 1)
      : allStopCityList.value.filter(i => i.Direction === 0);

  showLine.value = stopCityList.value.map(() => false);
}

async function toggleShowLine(routeIndex) {
  showLine.value[routeIndex] = !showLine.value[routeIndex];
  const route = stopCityList.value[routeIndex];

  if (showLine.value[routeIndex]) {
    await addMarkers(route);
  } else {
    removeMarkers(route);
  }
}

/* ================= map ================= */
async function addMarkers(route) {
  if (!map.value) return;

  route.Stops.forEach(stop => {
    const lat = stop.StopPosition?.PositionLat;
    const lng = stop.StopPosition?.PositionLon;
    if (!lat || !lng) return;

    if (markersMap.has(stop.StopUID)) return;

    // 使用可復原的 defaultIcon，並存於 marker 上
    const defaultIcon = L.icon({
      iconUrl,
      iconRetinaUrl,
      iconSize: [28, 36],
      iconAnchor: [14, 36],
      popupAnchor: [0, -36],
      shadowUrl,
    });

    const marker = L.marker([lat, lng], {
      icon: defaultIcon,
    }).addTo(map.value);

    // 儲存原始 icon 與 stopUID 以便後續替換/復原
    marker._originalIcon = defaultIcon;
    marker._stopUID = stop.StopUID;
    // 預設的 estimate 資訊（會在抓到 city estimate 時被覆蓋）
    marker._estimateSeconds = null;

    marker.bindTooltip(stop.StopName.Zh_tw, {
      direction: "top",
      offset: [0, -10],
    });

    marker.on("click", () => {
      // 點擊時先飛去該站
      flyToStop(stop);

      // 若已經有預估時間（來自 addMarkers 的一次性抓取），就直接更新上方顯示
      const est = marker._estimateSeconds;
      if (est !== null && est !== undefined) {
        estimatedTime.value = formatEstimateTime(est);
        styleEstimatedTime.value = getEstimateType(est);
      } else {
        // 否則再做一次針對該站的查詢（以取得最即時的資料）
        estimatedTimeOfArrival(stop.StopUID);
      }
    });

    markersMap.set(stop.StopUID, marker);
  });

  // 一次拿到目前整個城市的估時，並更新該 route 的 markers
  try {
    const res = await tdxRequest.get("/Bus/EstimatedTimeOfArrival/City/Tainan?%24format=JSON");
    const { N1Datas = [] } = res.data || {};

    // 把 N1Datas 轉成以 StopUID 為 key 的 Map
    const estimateMap = new Map();
    N1Datas.forEach(item => {
      if (item.StopUID && item.EstimateTime !== undefined) {
        estimateMap.set(item.StopUID, item.EstimateTime);
      }
    });

    // 對 route 的每個 stop 更新 marker（若無資料則傳 null 以復原），並把估時寫回 marker._estimateSeconds
    route.Stops.forEach(stop => {
      const est = estimateMap.has(stop.StopUID) ? estimateMap.get(stop.StopUID) : null;
      updateMarkerForEstimate(stop.StopUID, est);

      const m = markersMap.get(stop.StopUID);
      if (m) m._estimateSeconds = est;
    });
  } catch (e) {
    // 若抓取失敗，確保不影響既有 marker（可選擇紀錄錯誤）
    console.warn("fetch estimates failed", e);
  }
}

// 只替換「即將到站」的 marker，否則復原，並同步 marker._estimateSeconds 及 DOM class
function updateMarkerForEstimate(stopUID, estimateSeconds) {
  const marker = markersMap.get(stopUID);
  if (!marker) return;

  // 同步儲存 estimate 到 marker
  marker._estimateSeconds = estimateSeconds === undefined ? null : estimateSeconds;

  // formatEstimateTime 會回傳 "未發車" / "進站中" / "即將到站" / "剩 X 分鐘"
  const label = estimateSeconds === null || estimateSeconds === undefined ? null : formatEstimateTime(estimateSeconds);

  if (label === "即將到站") {
    // 改為高亮 icon 並加 class
    marker.setIcon(highlightIcon);
    const el = marker.getElement();
    if (el) el.classList.add("marker-soon");
  } else {
    // 復原為原始 icon，並移除 class
    if (marker._originalIcon) marker.setIcon(marker._originalIcon);
    const el = marker.getElement();
    if (el) el.classList.remove("marker-soon");
  }
}

const customHeight = ref("80vh"); // 給一個預設值
const controlRef = ref(null);
const titleRef = ref(null);

const updateScrollbarHeight = () => {

  const controlEl = controlRef.value;
  const controlHeight = controlEl ? controlEl.getBoundingClientRect().height : 0;

  // 獲取 title 的高度 (處理 v-for 產生的 Array)
  let titleHeight = 0;
  if (Array.isArray(titleRef.value) && titleRef.value.length > 0) {
    // 如果有多個 title，加總它們的高度，或者取外層容器
    titleRef.value.forEach(el => {
      titleHeight += el.getBoundingClientRect()?.height;
    });
  } else if (titleRef.value) {
    // 如果不是陣列（單一元素）
    // titleHeight = titleRef.value?.getBoundingClientRect()?.height;
  }

  const totalOccupied = controlHeight + titleHeight;

  customHeight.value = `calc(95vh - ${totalOccupied}px)`;
};
onMounted(async () => {
  await nextTick();


  const observer = new ResizeObserver(() => {
    updateScrollbarHeight();
  });


  if (controlRef.value) {
    observer.observe(controlRef.value);
  }

  // 監聽 title (如果是陣列則遍歷)
  if (Array.isArray(titleRef.value)) {
    titleRef.value.forEach(el => observer.observe(el));
  } else if (titleRef.value) {
    observer.observe(titleRef.value);
  }

  updateScrollbarHeight();

  onUnmounted(() => {
    observer.disconnect();
  });
});

const handleSearch = () => {
  const keyword = searchDate.value.trim().toLowerCase();
  searchKeyword.value = keyword; // 設定 highlight 的字串

  if (!keyword) {
    applyDirectionFilter();
    return;
  }

  stopCityList.value = allStopCityList.value.filter(route =>

    route.SubRouteName.Zh_tw.toLowerCase().includes(keyword) ||
    route.Stops.some(stop =>
      stop.StopName.Zh_tw.toLowerCase().includes(keyword)
    )
  );

  showLine.value = stopCityList.value.map(() => false);
  clearAllMarkers();
};

// 新增：escape 與 highlight 函式
function escapeHtml(str = "") {
  return String(str).replace(/[&<>"']/g, (s) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[s];
  });
}
function escapeRegExp(str = "") {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function highlight(text, keyword) {
  if (!keyword) return escapeHtml(text);
  const esc = escapeRegExp(keyword);
  const re = new RegExp(esc, "ig");
  return escapeHtml(text).replace(re, (match) => `<mark class="search-mark">${match}</mark>`);
}

function removeMarkers(route) {
  route.Stops.forEach(stop => {
    const marker = markersMap.get(stop.StopUID);
    if (marker) {
      map.value.removeLayer(marker);
      markersMap.delete(stop.StopUID);
    }
  });
}

function clearAllMarkers() {
  markersMap.forEach(marker => map.value.removeLayer(marker));
  markersMap.clear();
}

function flyToStop(stop) {
  const lat = stop.StopPosition?.PositionLat;
  const lng = stop.StopPosition?.PositionLon;
  if (!lat || !lng) return;

  activeStopUID.value = stop.StopUID;
  map.value.setView([lat, lng], 16);
  estimatedTimeOfArrival(stop.StopUID);
}

/* ================= utils ================= */
function directionText(val) {
  return val === 1 ? "去程" : "回程";
}


/* 格式化預估到站時間 API 回傳的 EstimateTime */
const formatEstimateTime = (seconds) => {
  if (seconds === undefined || seconds === null) return "未發車";

  // 處理 TDX 特殊狀態 (通常是負數)
  if (seconds < 0) return "未發車";

  const minutes = Math.floor(seconds / 60);

  if (minutes < 1) return "進站中";
  if (minutes < 2) return "即將到站";

  return `剩 ${minutes} 分鐘`;
};

/**
 * 根據時間回傳顏色類別
 */
const getEstimateType = (seconds) => {
  if (seconds < 60) return "danger";  // 紅色
  if (seconds < 120) return "warning"; // 橘色
  return "success";                    // 綠色
};
</script>

<style scoped lang="scss">
.route-card {
  margin-bottom: 8px;
}

.route-title {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.stop-list {
  margin-top: 8px;
}

.stop-item {
  padding: 4px 0;
  cursor: pointer;

  &.active {
    color: #3e835e;
    font-weight: bold;
  }
}  

.scrollbar-content {
  height: 80vh;
}

.text-estimatedTime {
  --el-loading-spinner-size: 24px;
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    height: 10px;
    width: auto;
    margin-top: 3px;
  }

  &.warning {
    color: #233D4D;
  }

  &.danger {
    color: #D81200;
  }

}

.search-mark {
  background: #fff3bf;
  color: #2a2a2a;
  padding: 0 4px;
  border-radius: 4px;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,0.04);
}
</style>
