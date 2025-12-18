<template>
  <div class="app-container">

    <el-container class="main-layout">
      <div class="sidebar">
        <div class="title-container" v-for="item in dataList.Networks">
          <h2 class="title-container__lable">{{ item.NetworkName.Zh_tw }}</h2>
          <div class="title-container_sublable">{{ item.NetworkName.En }}</div>
        </div>

        <div class="search">
          <!-- <el-input
            v-model="searchText"
            placeholder="搜尋地址（例如：新北市板橋區府中路）"
            clearable
            @keyup.enter="searchAddress"
          >
            <template #append>
              <Search />
            </template>
          </el-input> -->
        </div>

        <!-- <div class="sidebar-header">
          <h3>附近的都更地點</h3>
          <small
            ><el-icon><LocationFilled /></el-icon> 目前位置:
            {{ userLocation.lat?.toFixed(4) }},
            {{ userLocation.lng?.toFixed(4) }}</small
          >
        </div>-->

        <el-scrollbar>

          <div v-loading="loading" class="list-container">
            <el-empty
              v-if="!loading && stopCityList.length === 0"
              description="附近無資料"
            />

            <el-card
              v-for="(item, index) in stopCityList"
              :key="index"
              :class="['location-card', { active: colorStyle(index) }]"
              shadow="hover"
              @click="flyToLocation(item, index)"
            >
              <div class="card-content">
           
                <div class="location-info">
                  <h4 class="label_style">
                    {{ item.StopID }} {{ item.StopName.Zh_tw }}
        
                  </h4>
                  <div class="span__style">
                    <span class="text-unit">
                      {{ item.StopAddress}}
                      </span>
         
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </el-scrollbar>
      </div>

      <el-main class="map-wrapper">
        <div id="map"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick, watch } from "vue";

import L from "leaflet";
import { ElMessage, ElNotification } from "element-plus";
import axios from "axios";
import { LocationFilled } from "@element-plus/icons-vue";
import iconUrl from "@/assets/Vector-icon.png?url";
import iconRetinaUrl from "@/assets/Vector-icon-2x.png?url";
import shadowUrl from "@/assets/Vector-shadow.png?url";
import Search from "@/assets/search.svg?component";
import { useAuthStore } from "@/stores/auth";
import { fetchTainanBusNetwork } from "@/utils/bus";
import tdxRequest from '@/api/tdxApi';
const { network, realTimeNearStop, maxBodyLengthapNameURL,subRouteCity } = fetchTainanBusNetwork();
const loading = ref(false);
const dataList = ref([]);
const stopCityList = ref([]);
const activeIndex = ref(null);
const mapList =ref(null)
const map = ref(null);
const markersMap = ref(new Map()); // StopUID -> marker
const activeMarker = ref(null);
onMounted(() => {
  init();
});

function init() {
  networkApi();
  stopApi();
  stopCityＭap();
}

function flyToLocation(item, index) {
  activeIndex.value = index;
  // 優先透過已有的 markersMap 來定位（StopUID / StopID）
  const key = item.StopUID || item.StopID;
  const marker = markersMap.value.get(key);
  if (marker && map.value) {
    const latlng = marker.getLatLng();
    map.value.setView([latlng.lat, latlng.lng], 16);
    try {
      // 高亮標記
      marker.setIcon(L.icon({ iconUrl: iconRetinaUrl, iconSize: [34,44], iconAnchor:[17,44], popupAnchor:[0,-44], shadowUrl, shadowSize:[40,40], shadowAnchor:[14,40] }));
    } catch (e) {}
    if (activeMarker.value && activeMarker.value !== marker) {
      try { activeMarker.value.setIcon(L.icon({ iconUrl, iconSize:[28,36], iconAnchor:[14,36], popupAnchor:[0,-36], shadowUrl, shadowSize:[36,36], shadowAnchor:[12,36] })); } catch (e) {}
    }
    activeMarker.value = marker;
    marker.openTooltip();
  } else if (item.StopPosition && item.StopPosition.Latitude && item.StopPosition.Longitude) {
    map.value.setView([item.StopPosition.Latitude, item.StopPosition.Longitude], 16);
  } else {
    ElMessage.warning("該地點無經緯度資訊");
  }
}

function networkApi() {
  dataList.value = network.data;
  //  tdxRequest.get('/Bus/Network/City/Tainan?%24top=30&%24format=JSON')
  //   .then(function (res) {
  //     dataList.value = res.data;
  //     console.log(res, "res");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}

function stopApi() {
  // 將即時資料加入 arrivalText，優先使用 EstimateTime（若有）
  stopCityList.value = maxBodyLengthapNameURL.Stops;
    // .map((stop) => ({
    //   ...stop,
    //   // arrivalText: computeArrivalText(stop),
    // }))
    // .sort((a, b) => (Number(a.StopSequence) || 0) - (Number(b.StopSequence) || 0));
  // axios
  //   .get(
  //     "https://tdx.transportdata.tw/api/basic/v3/Bus/SubRoute/City/Tainan?%24top=30&%24format=JSON",
  //     {
  //       headers: getAuthorizationHeader(),
  //     }
  //   )
  //   .then(function (res) {
  //     console.log(res, "res");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}


function stopCityＭap(){
   mapList.value = maxBodyLengthapNameURL;
    console.log( mapList.value,"mapList");
  // 初始化地圖與標記（如果尚未建立）
  if (!map.value) {
    nextTick(() => {
      try {
        map.value = L.map("map", { zoomControl: true }).setView([23.0, 120.2], 12);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map.value);

        // 建立 icon
        const defaultIcon = L.icon({
          iconUrl: iconUrl,
          iconRetinaUrl: iconRetinaUrl,
          iconSize: [28, 36],
          iconAnchor: [14, 36],
          popupAnchor: [0, -36],
          shadowUrl: shadowUrl,
          shadowSize: [36, 36],
          shadowAnchor: [12, 36]
        });

        const activeIcon = L.icon({
          iconUrl: iconRetinaUrl,
          iconRetinaUrl: iconRetinaUrl,
          iconSize: [34, 44],
          iconAnchor: [17, 44],
          popupAnchor: [0, -44],
          shadowUrl: shadowUrl,
          shadowSize: [40, 40],
          shadowAnchor: [14, 40]
        });

        // 如果有 stops，將標記加入地圖
        const stops = mapList.value && mapList.value.Stops ? mapList.value.Stops : [];
        const bounds = [];
        stops.forEach((s) => {
          const lat = s.StopPosition?.PositionLat;
          const lon = s.StopPosition?.PositionLon;
          if (lat && lon) {
            const marker = L.marker([lat, lon], { icon: defaultIcon }).addTo(map.value);
            const title = s.StopName?.Zh_tw || s.StopName?.En || "停靠站";
            marker.bindTooltip(`<div class='tooltipHTML'>${title}</div>`, { direction: 'top', offset: [0, -10], permanent: false });
            marker.on('click', () => {
              // 透過 StopUID 嘗試在側邊欄選取相對應項目
              activeMarker.value = marker;
              // 若側邊資料有符合的 index，切換 activeIndex
              const idx = stopCityList.value.findIndex(x => x.StopUID === s.StopUID || x.StopID === s.StopID);
              if (idx !== -1) {
                activeIndex.value = idx;
              }
              // 高亮此標記
              highlightMarker(marker, activeIcon, defaultIcon);
              map.value.setView([lat, lon], 16);
            });
            markersMap.value.set(s.StopUID || s.StopID, marker);
            bounds.push([lat, lon]);
          }
        });

        if (bounds.length > 0) {
          map.value.fitBounds(bounds, { padding: [40, 40] });
        }
      } catch (e) {
        console.error('init leaflet error', e);
      }
    });
  }

  // helper: 切換標記樣式
  function highlightMarker(marker, activeIcon, defaultIcon) {
    // reset previous
    if (activeMarker.value && activeMarker.value !== marker) {
      try { activeMarker.value.setIcon(defaultIcon); } catch (e) {}
    }
    try { marker.setIcon(activeIcon); } catch (e) {}
    activeMarker.value = marker;
  }

  // 也提供外部呼叫用來以 StopUID 高亮
  const highlightByStop = (stop) => {
    const key = stop.StopUID || stop.StopID;
    const m = markersMap.value.get(key);
    if (m) {
      const latlng = m.getLatLng();
      map.value.setView([latlng.lat, latlng.lng], 16);
      // 重新建立 icon 以避免 scope 問題
      const ai = L.icon({ iconUrl: iconRetinaUrl, iconSize: [34,44], iconAnchor:[17,44], popupAnchor:[0,-44], shadowUrl, shadowSize:[40,40], shadowAnchor:[14,40] });
      const di = L.icon({ iconUrl, iconSize:[28,36], iconAnchor:[14,36], popupAnchor:[0,-36], shadowUrl, shadowSize:[36,36], shadowAnchor:[12,36] });
      if (activeMarker.value && activeMarker.value !== m) {
        try { activeMarker.value.setIcon(di); } catch (e) {}
      }
      try { m.setIcon(ai); } catch (e) {}
      activeMarker.value = m;
      m.openTooltip();
    }
  };

  // 監聽 activeIndex 的變化，當側邊切換站點時也更新地圖標記
  // 由於是 script setup，可以用 watch (動態載入)
  import("vue").then(({ watch }) => {
    watch(activeIndex, (newIdx) => {
      const item = stopCityList.value[newIdx];
      if (item && map.value) {
        highlightByStop(item);
      }
    });
  });

  // 备用：若要使用 API 抓取遠端 stops，可在此打開
  // tdxRequest.get('/Bus/Stop/City/Tainan?%24top=30&%24format=JSON')
  //   .then(function (res) {
  //     mapList.value = res.data;
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

}
function computeArrivalText(item) {
  // 若 API 提供 EstimateTime（單位：秒），直接顯示分鐘
  if (item.EstimateTime !== undefined && item.EstimateTime !== null) {
    const seconds = Number(item.EstimateTime);
    if (!isNaN(seconds)) {
      if (seconds <= 0) return "即將到站";
      const mins = Math.ceil(seconds / 60);
      return `${mins} 分鐘`;
    }
  }

  // 否則以最近資料時間做為 fallback（顯示更新多久前與車上時間）
  try {
    const now = new Date();
    const srcRec = item.SrcRecTime ? new Date(item.SrcRecTime) : null;
    const trans = item.TransTime ? new Date(item.TransTime) : null;
    if (srcRec) {
      const ageSec = Math.floor((now - srcRec) / 1000);
      if (ageSec < 60) return `更新 ${ageSec} 秒前`;
      const ageMin = Math.floor(ageSec / 60);
      const timeStr = trans ? `（ ${directionText(item.Direction)} ${trans.toLocaleTimeString()}）` : "";
      return `更新 ${ageMin} 分鐘前${timeStr}`;
    }
  } catch (e) {
    // ignore
  }

  return "無預估時間";
}


function directionText(direction) {
  return direction === 0 ? "往返" : direction === 1 ? "去程" : "回程";
}
function colorStyle(index) {
  return index === activeIndex.value;
}
</script>

<style lang="scss" scoped>
:root {
  --el-text-color-primary: #767676;
  --el-text-color-placeholder: #408560;
  --el-color-success: #408560;
}

.el-input {
  --el-border-radius-base: 8px;
  --el-input-bg-color: #e9f4ee;
}

.text-unit {
  color: #767676;
  font-size: 18px;
}

.eta-text {
  margin-top: 6px;
  font-size: 14px;
  color: #408560;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Noto Sans TC", sans-serif;
}

.app-container {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.title-container {
  padding: 0.4rem 0;
  text-align: center;
  background: #88c6a5;
}
.title-container__lable {
  font-size: 18px;
  font-weight: bolder;
}
.title-container_sublable {
  font-size: 14px;
  color: #404040;
}
.search {
  background: #72af8f;
  color: #408560;
  padding: 1rem 1rem;
  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
  :deep(.el-input-group__append) {
    padding: 0 13px;
    background-color: #e9f4ef;
    box-shadow: none;
  }
  :deep(.el-input__wrapper) {
    box-shadow: none;
  }
}

.main-layout {
  height: 100%;
}

.sidebar {
  background: #fff;
  border-right: 1px solid #dcdfe6;
  display: flex;
  flex-direction: column;
  z-index: 500;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 1rem;
  left: 1rem;
  height: 95%;
  border-radius: var(--el-border-radius-base);
  overflow: hidden;
  width: 378px;
  @media (max-width: 575px) {
    height: 50%;
    top: 50%;
    position: absolute;
    left: 0;
    width: 100%;
  }
}

.sidebar-header {
  padding: 0.4rem 1rem;
  background: #444444;
  color: white;
  @media (max-width: 575px) {
    padding: 5px 15px;
  }
}

.sidebar-header h3 {
  margin: 0 0 5px 0;
  @media (max-width: 575px) {
    margin: 0;
  }
}

.list-container {
  padding: 10px;
}

.location-card {
  margin-bottom: 10px;
  cursor: pointer;
  transition: transform 0.2s;
  &.active {
    border: solid #408660 thin;
    box-shadow: 0 0 5px #88c7a5;
    background: rgb(136 199 165 / 13%);
  }
}

.location-card:hover {
  transform: translateY(-2px);
}

.card-content {
  display: flex;
  gap: 10px;
}

.location-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: var(--el-border-radius-base);
}

.location-info {
  display: flex;
  justify-content: space-between;
  width: 100%;

  font-weight: bolder;
  flex-wrap: wrap;
  align-items: center;
}

:deep(.leaflet-tooltip) {
  padding: 6px 10px;
  border-radius: var(--el-border-radius-base);
  color: var(--el-text-color-primary);
  filter: drop-shadow(2px 4px 6px rgba(131, 86, 37, 0.66));
}

:deep(.leaflet-pane.leaflet-overlay-pane path) {
  stroke: #36bb74;
  fill: #28b369;
}

:deep(.leaflet-left .leaflet-control) {
  margin-left: 376px;
  @media (max-width: 575px) {
    margin-left: 10px;
  }
}

:deep(.leaflet-bar a) {
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  width: 26px;
  height: 26px;
  line-height: 26px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #397755;
}

.map-wrapper {
  height: 100%;
  width: 100%;
  padding: 0 !important;
  position: relative;
  @media (max-width: 575px) {
    height: 50%;
  }
}

#map {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.user-location-tooltip {
  background: transparent;
  border: none;
  box-shadow: none;
}

.user-location-tooltip::before {
  display: none;
}

::v-deep {
  .el-divider__text {
    white-space: nowrap;
  }
  .el-card__body {
    padding: 10px;
  }
  .tooltipHTML {
    padding: 0;
    display: flex;
    align-items: center;
    gap: 9px;
    justify-content: center;
  }
  .tooltipHTML__img {
    display: flex;
    gap: 4px;
    align-items: center;
    width: auto;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: solid #de9848 3px;
      box-shadow: 2px 2px 9px rgb(131 86 37 / 66%);
      background: #fff;
      padding: 3px;
    }
  }
}

.el-tag--large {
  --el-tag-font-size: 16px;
}

.label_style {
  font-size: 20px;
  color: #000;
  font-weight: 500;
}
.span__style {
  font-size: 13px;

  color: #000;
  line-height: 1.4;
  width: 100%;
}

.el-button {
  border-radius: var(--el-border-radius-base);
}
</style>
