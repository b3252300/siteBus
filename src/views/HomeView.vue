<template>
  <div class="map-container">
    <el-container class="main-layout">
      <div class="sidebar" :class="{ active: sidebar.sidebarOpen }">
        <div
          class="title-container"
          v-for="item in title?.Networks"
          :key="item.SubRouteUID"
        >
          <h2 class="title-container__lable">{{ item.NetworkName.Zh_tw }}</h2>
          <div class="title-container_sublable">{{ item.NetworkName.En }}</div>
        </div>
        <div class="control-container">
          <el-radio-group
            v-model="vaildControl"
            fill="#3e835e"
            @change="handleControl"
            size="small"
          >
            <el-radio-button label="去程" value="go" />
            <el-radio-button label="往返" value="back" />
          </el-radio-group>
        </div>

        <el-scrollbar v-loading="loading">
          <div  class="list-container">
            <el-empty
              v-if="!loading && stopCityList.length === 0"
              description="附近無資料"
            />
            <el-card v-for="(item, index) in stopCityList" :key="index">
              <h1 class="label_style" @click="toggleShowLine(index)">
                {{ item.SubRouteName.Zh_tw }}
                <span class="text-unit">
                  {{ directionText(item.Direction) }}
                </span>
              </h1>

              <div v-show="showLine[index]" class="stop__line">
                <div
                  v-for="(stop, id) in item.Stops"
                  :class="['location-top', { active: colorStyle(id) }]"
                  @click="flyToLocation(stop, id)"
                >
                  <strong>{{ stop.StopSequence }}</strong>
                  <span class="stop-name">{{ stop.StopName.Zh_tw }}</span>
                  <span
                    v-if="boardingTypeText(stop.BoardingType)"
                    class="badge"
                  >
                    {{ boardingTypeText(stop.BoardingType) }}
                  </span>
                  <span
                    v-if="isSectionPoint(stop.IsSectionPoint)"
                    class="badge section"
                  >
                    分段點
                  </span>
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
import { ref, reactive, onMounted, nextTick, watch, computed } from "vue";
import { ElLoading } from "element-plus";
import { useUiStore } from "@/stores/ui";
import { useDataStore } from "@/stores/data";
import L from "leaflet";
import { ElMessage, ElNotification } from "element-plus";

import iconUrl from "@/assets/Vector-icon.png?url";
import iconRetinaUrl from "@/assets/Vector-icon-2x.png?url";
import shadowUrl from "@/assets/Vector-shadow.png?url";


import tdxRequest from "@/api/tdxApi";
import { fetchTainanBusNetwork } from "@/utils/bus";
const { network, realTimeNearStop, maxBodyLengthapNameURL, subRouteCity } =
  fetchTainanBusNetwork();

let title = ref([]);
const stopCityList = ref([]);
const loading = ref(true);
const allStopCityList = ref([]);
const activeIndex = ref(null);
const mapList = ref(null);
const map = ref(null);
const markersMap = ref(new Map());
const stopRefCount = ref(new Map());
const activeMarker = ref(null);
const showLine = ref([]);

const { networkApi } = useDataStore();

const sidebar = useUiStore();

onMounted(() => {
  init();
});

function init() {
  try {
    stopApi();
    stopCityＭap();
    networkApi().then((res) => {
      title.value = res;
    });
  } catch (e) {
    console.error(e);
  }finally {
    loading.value = false;
  }
}

const vaildControl = ref("go");

const handleControl = (e) => {
  // 切換前先清除現有地圖標記與參考計數，避免殘留不一致的 marker
  if (map.value) {
    for (const m of markersMap.value.values()) {
      try {
        map.value.removeLayer(m);
      } catch (err) {}
    }
  }
  markersMap.value.clear();
  stopRefCount.value = new Map();
  activeMarker.value = null;

  if (e === "go") {
    stopCityList.value = allStopCityList.value.filter(
      (item) => item.Direction === 1
    );
  } else if (e === "back") {
    stopCityList.value = allStopCityList.value.filter(
      (item) => item.Direction === 0
    );
  } else {
    stopCityList.value = [...allStopCityList.value];
  }

  // 重設 showLine（所有路線預設關閉）
  showLine.value = stopCityList.value.map(() => false);
};
function flyToLocation(item, index) {
  activeIndex.value = index;
  // 支援多種傳入格式：整個 stop（含 StopUID/StopID/StopPosition）或僅 StopPosition
  // 先取得可能的 StopUID/StopID
  const key = (item && (item.StopUID || item.StopID)) || null;

  // 取出 lat/lng（支援 PositionLat/PositionLon 或 Latitude/Longitude）
  const getLatLngFrom = (obj) => {
    if (!obj) return null;
    const lat =
      obj.PositionLat ??
      obj.PositionLatitude ??
      obj.Latitude ??
      obj.StopPosition?.PositionLat ??
      obj.StopPosition?.Latitude;
    const lng =
      obj.PositionLon ??
      obj.PositionLongitude ??
      obj.Longitude ??
      obj.StopPosition?.PositionLon ??
      obj.StopPosition?.Longitude;
    if (lat !== undefined && lng !== undefined && lat !== null && lng !== null)
      return { lat: Number(lat), lng: Number(lng) };
    return null;
  };

  const pos = getLatLngFrom(item);

  // 嘗試直接以 StopUID/StopID 找 marker
  let marker = null;
  if (key) marker = markersMap.value.get(key);

  // 若沒有 key，或找不到 marker，嘗試以座標比對現有標記（小範圍容差）
  if (!marker && pos) {
    const tol = 0.0006; // 約 60m
    for (const [k, m] of markersMap.value.entries()) {
      try {
        const ll = m.getLatLng();
        if (
          Math.abs(ll.lat - pos.lat) <= tol &&
          Math.abs(ll.lng - pos.lng) <= tol
        ) {
          marker = m;
          break;
        }
      } catch (e) {}
    }
  }

  if (marker && map.value) {
    const latlng = marker.getLatLng();
    map.value.setView([latlng.lat, latlng.lng], 16);
    try {
      marker.setIcon(
        L.icon({
          iconUrl: iconRetinaUrl,
          iconSize: [34, 44],
          iconAnchor: [17, 44],
          popupAnchor: [0, -44],
          shadowUrl,
          shadowSize: [40, 40],
          shadowAnchor: [14, 40],
        })
      );
    } catch (e) {}
    if (activeMarker.value && activeMarker.value !== marker) {
      try {
        activeMarker.value.setIcon(
          L.icon({
            iconUrl,
            iconSize: [28, 36],
            iconAnchor: [14, 36],
            popupAnchor: [0, -36],
            shadowUrl,
            shadowSize: [36, 36],
            shadowAnchor: [12, 36],
          })
        );
      } catch (e) {}
    }
    activeMarker.value = marker;
    try {
      marker.openTooltip();
    } catch (e) {}
    return;
  }

  // 若沒有找到標記，但有座標，直接定位
  if (pos && map.value) {
    map.value.setView([pos.lat, pos.lng], 16);
    return;
  }

  ElMessage.warning("該地點無經緯度資訊");
}

// function networkApi() {
//   //title.value = network.data;

//   console.log(title.value.length>0,"fffff");
//   tdxRequest
//     .get("/Bus/Network/City/Tainan?%24top=30&%24format=JSON")
//     .then(function (res) {
//       title.value = res.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

function stopApi() {
  // 呼叫 stopOfRouteApi，並在取得資料後進行後續處理
  stopOfRouteApi()
    .then(() => {
      allStopCityList.value.forEach((item) => {
        item.Stops = item.Stops.map((stop) => ({ ...stop })).sort(
          (a, b) =>
            (Number(a.StopSequence) || 0) - (Number(b.StopSequence) || 0)
        );
      });

      // 根據目前 vaildControl 進行初始過濾（避免修改原始資料）
      if (vaildControl.value === "go") {
        stopCityList.value = allStopCityList.value.filter(
          (item) => item.Direction === 1
        );
      } else if (vaildControl.value === "back") {
        stopCityList.value = allStopCityList.value.filter(
          (item) => item.Direction === 0
        );
      } else {
        stopCityList.value = [...allStopCityList.value];
      }

      // 初始化 showLine（預設全部關閉），並清空參考計數
      showLine.value = stopCityList.value.map(() => false);
      stopRefCount.value = new Map();
      // 在取得 Stops 資料後，若地圖已初始化則加入標記；否則嘗試初始化地圖再加入
      tryAddMarkersFromStops();
    })
    .catch((err) => {
      console.error("stopOfRouteApi error", err);
    });
}

function tryAddMarkersFromStops() {
  // 如果地圖尚未建立，先呼叫 stopCityＭap() 進行初始化（它會建立 map）
  if (!map.value) {
    stopCityＭap();
    // 等下一個 event loop，再嘗試加入標記（僅加入目前開啟的路線）
    setTimeout(() => addMarkersForOpenRoutes(), 300);
  } else {
    addMarkersForOpenRoutes();
  }
}

function addMarkersForOpenRoutes() {
  if (!stopCityList.value) return;
  showLine.value.forEach((val, idx) => {
    if (val) addMarkersForRoute(idx);
  });
}

function addMarkersForRoute(routeIndex) {
  if (!map.value) return;
  const route = stopCityList.value[routeIndex];
  if (!route || !route.Stops) return;

  const defaultIcon = L.icon({
    iconUrl,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
    shadowUrl,
    shadowSize: [36, 36],
    shadowAnchor: [12, 36],
  });

  (route.Stops || []).forEach((s) => {
    const lat =
      s.StopPosition?.PositionLat ??
      s.PositionLat ??
      s.PositionLatitude ??
      s.Latitude;
    const lon =
      s.StopPosition?.PositionLon ??
      s.PositionLon ??
      s.PositionLongitude ??
      s.Longitude;
    const key =
      s.StopUID || s.StopID || s.StationUID || s.StationID || `${lat}_${lon}`;
    if (!lat || !lon) return;

    // 參考計數：若已存在，僅增加計數
    const curCount = stopRefCount.value.get(key) || 0;
    stopRefCount.value.set(key, curCount + 1);
    if (markersMap.value.has(key)) return;

    try {
      const m = L.marker([Number(lat), Number(lon)], {
        icon: defaultIcon,
      }).addTo(map.value);
      const title = s.StopName?.Zh_tw || s.StopName?.En || s.Name || "停靠站";
      m.bindTooltip(`<div class='tooltipHTML'>${title}</div>`, {
        direction: "top",
        offset: [0, -10],
        permanent: false,
      });
      markersMap.value.set(key, m);
    } catch (e) {
      console.error("add marker error", e);
    }
  });
}

function removeMarkersForRoute(routeIndex) {
  if (!map.value) return;
  const route = stopCityList.value[routeIndex];
  if (!route || !route.Stops) return;

  (route.Stops || []).forEach((s) => {
    const lat =
      s.StopPosition?.PositionLat ??
      s.PositionLat ??
      s.PositionLatitude ??
      s.Latitude;
    const lon =
      s.StopPosition?.PositionLon ??
      s.PositionLon ??
      s.PositionLongitude ??
      s.Longitude;
    const key =
      s.StopUID || s.StopID || s.StationUID || s.StationID || `${lat}_${lon}`;
    if (!key) return;

    const curCount = stopRefCount.value.get(key) || 0;
    if (curCount <= 1) {
      // remove marker
      const m = markersMap.value.get(key);
      if (m) {
        try {
          map.value.removeLayer(m);
        } catch (e) {}
        markersMap.value.delete(key);
      }
      stopRefCount.value.delete(key);
    } else {
      stopRefCount.value.set(key, curCount - 1);
    }
  });
}

function stopCityＭap() {
  // 初始化地圖與標記（如果尚未建立）
  if (!map.value) {
    nextTick(() => {
      try {
        map.value = L.map("map", { zoomControl: true }).setView(
          [23.0, 120.2],
          12
        );
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
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
          shadowAnchor: [12, 36],
        });

        const activeIcon = L.icon({
          iconUrl: iconRetinaUrl,
          iconRetinaUrl: iconRetinaUrl,
          iconSize: [34, 44],
          iconAnchor: [17, 44],
          popupAnchor: [0, -44],
          shadowUrl: shadowUrl,
          shadowSize: [40, 40],
          shadowAnchor: [14, 40],
        });

        // 如果有 stops，將標記加入地圖
        const stops =
          mapList.value && mapList.value.Stops ? mapList.value.Stops : [];
        const bounds = [];
        stops.forEach((s) => {
          const lat = s.StopPosition?.PositionLat;
          const lon = s.StopPosition?.PositionLon;
          if (lat && lon) {
            const marker = L.marker([lat, lon], { icon: defaultIcon }).addTo(
              map.value
            );
            const title = s.StopName?.Zh_tw || s.StopName?.En || "停靠站";
            marker.bindTooltip(`<div class='tooltipHTML'>${title}</div>`, {
              direction: "top",
              offset: [0, -10],
              permanent: false,
            });
            marker.on("click", () => {
              // 透過 StopUID 嘗試在側邊欄選取相對應項目
              activeMarker.value = marker;
              // 若側邊資料有符合的 index，切換 activeIndex
              const idx = stopCityList.value.findIndex(
                (x) => x.StopUID === s.StopUID || x.StopID === s.StopID
              );
              if (idx !== -1) {
                activeIndex.value = idx;
              }
              // 高亮此標記
              highlightMarker(marker, activeIcon, defaultIcon);
              map.value.setView([lat, lon], 16);
            });
            const key =
              s.StopUID ||
              s.StopID ||
              s.StationUID ||
              s.StationID ||
              `${lat}_${lon}`;
            markersMap.value.set(key, marker);
            // 設定參考計數，避免後續被誤移除
            stopRefCount.value.set(key, (stopRefCount.value.get(key) || 0) + 1);
            bounds.push([lat, lon]);
          }
        });

        if (bounds.length > 0) {
          map.value.fitBounds(bounds, { padding: [40, 40] });
        }
      } catch (e) {
        console.error("init leaflet error", e);
      }
    });
  }

  // helper: 切換標記樣式
  function highlightMarker(marker, activeIcon, defaultIcon) {
    // reset previous
    if (activeMarker.value && activeMarker.value !== marker) {
      try {
        activeMarker.value.setIcon(defaultIcon);
      } catch (e) {}
    }
    try {
      marker.setIcon(activeIcon);
    } catch (e) {}
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
      const ai = L.icon({
        iconUrl: iconRetinaUrl,
        iconSize: [34, 44],
        iconAnchor: [17, 44],
        popupAnchor: [0, -44],
        shadowUrl,
        shadowSize: [40, 40],
        shadowAnchor: [14, 40],
      });
      const di = L.icon({
        iconUrl,
        iconSize: [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -36],
        shadowUrl,
        shadowSize: [36, 36],
        shadowAnchor: [12, 36],
      });
      if (activeMarker.value && activeMarker.value !== m) {
        try {
          activeMarker.value.setIcon(di);
        } catch (e) {}
      }
      try {
        m.setIcon(ai);
      } catch (e) {}
      activeMarker.value = m;
      m.openTooltip();
    }
  };

  // 監聽 activeIndex 的變化，當側邊切換站點時也更新地圖標記

  import("vue").then(({ watch }) => {
    watch(activeIndex, (newIdx) => {
      const item = stopCityList.value[newIdx];
      if (item && map.value) {
        highlightByStop(item);
      }
    });
  });

  tdxRequest
    .get("/Bus/Stop/City/Tainan?%24top=30&%24format=JSON")
    .then(function (res) {
      mapList.value = res.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function toggleShowLine(index) {
  // 切換顯示並新增/移除該路線的標記
  showLine.value[index] = !showLine.value[index];
  if (showLine.value[index]) {
    // 若地圖尚未建立，先建立再加標記
    if (!map.value) {
      stopCityＭap();
      setTimeout(() => addMarkersForRoute(index), 300);
    } else {
      addMarkersForRoute(index);
    }
  } else {
    removeMarkersForRoute(index);
  }
}

// 轉換 BoardingType 成可讀文字（TDX 回傳可能為數字或字串）
function boardingTypeText(val) {
  if (val === undefined || val === null || val === "") return "";
  const v = String(val);
  // 常見對應：0/空: 可上下車；1: 僅下車；2: 僅上車；3: 不停靠
  if (v === "0" || v === "" || v.toLowerCase() === "null") return "可上下車";
  switch (v) {
    case "1":
      return "僅下車";
    case "2":
      return "僅上車";
    case "3":
      return "不停靠";
    default:
      return v;
  }
}

// 判斷是否為分段點（IsSectionPoint 可能為 boolean、0/1 或字串）
function isSectionPoint(val) {
  if (val === true) return true;
  const v = String(val).toLowerCase();
  return v === "1" || v === "true";
}
function stopOfRouteApi() {
  // 將即時資料加入 arrivalText，並回傳 promise 讓呼叫端可以等待完成
  return tdxRequest
    .get("/Bus/StopOfRoute/City/Tainan?%24top=30&%24format=JSON")
    .then(function (res) {
      // 保留原始完整資料
      allStopCityList.value = res.data.StopOfRoutes || [];
      return res;
    })
    .catch(function (error) {
      console.log(error);
      // 重新拋出，以便呼叫端可以處理錯誤
      throw error;
    });
}

function directionText(direction) {
  return direction === 0 ? "往返" : direction === 1 ? "去程" : "回程";
}
function colorStyle(index) {
  return index === activeIndex.value;
}
</script>
