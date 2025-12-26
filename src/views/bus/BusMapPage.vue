<template>
  <MapLayout>

    <template #sidebar>
      <BusSidebar>

        <div
          v-for="item in title?.Networks"
          :key="item.SubRouteUID"
          class="title-container"
        >
          <h2 class="title-container__label">
            {{ item.NetworkName.Zh_tw }}
          </h2>
          <div class="title-container__sublabel">
            {{ item.NetworkName.En }}
          </div>
        </div>

        <!-- 去 / 回程 -->
        <div class="control-container">
          <el-radio-group

            v-model="vaildControl"
            size="small"
            @change="handleControl"
          >
            <el-radio-button label="去程" value="go" type="success"/>
            <el-radio-button label="往返" value="back" type="success"/>
          </el-radio-group>
        </div>

        <!-- 路線 / 站牌 -->
        <el-scrollbar v-loading="loading">
           <div  class="list-container">
            <el-empty
            v-if="!loading && stopCityList.length === 0"
            description="附近無資料"
          />

          <el-card
            v-for="(route, routeIndex) in stopCityList"
            :key="route.SubRouteUID"
     
          >
            <h3
              class="label_style"
              @click="toggleShowLine(routeIndex)"
            >
              {{ route.SubRouteName.Zh_tw }}
              <span class="text-unit">
                {{ directionText(route.Direction) }}
              </span>
            </h3>

            <div v-show="showLine[routeIndex]" class="stop__line">
              <div
                v-for="(stop, stopIndex) in route.Stops"
                :key="stop.StopUID"
                :class="[
                  'location-top',
                  { active: activeStopUID === stop.StopUID },
                ]"
                @click="flyToStop(stop)">
                <strong>{{ stop.StopSequence }}</strong>
                <span class="stop-name">{{ stop.StopName.Zh_tw }}</span>
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

import { ref, onMounted } from "vue";
import L from "leaflet";

import MapLayout from "@/layouts/components/MapLayout.vue";
import LeafletMap from "@/components/map/LeafletMap.vue";
import BusSidebar from "@/components/bus/BusSidebar.vue";

import tdxRequest from "@/api/tdxApi";

import iconUrl from "@/assets/Vector-icon.png?url";
import iconRetinaUrl from "@/assets/Vector-icon-2x.png?url";
import shadowUrl from "@/assets/Vector-shadow.png?url";


const mapRef = ref(null);
const map = ref(null);

const loading = ref(true);
const title = ref(null);

const allStopCityList = ref([]);
const stopCityList = ref([]);
const showLine = ref([]);

const vaildControl = ref("go");
const activeStopUID = ref(null);


const markersMap = new Map();


onMounted(async () => {
  map.value = mapRef.value.getMap();
  await initData();
});


async function initData() {
  loading.value = true;
  await Promise.all([fetchNetwork(), fetchStopOfRoute()]);
  applyDirectionFilter();
  loading.value = false;
}

/* ================= API ================= */
function fetchNetwork() {
  return tdxRequest
    .get("/Bus/Network/City/Tainan?%24format=JSON")
    .then(res => {
      title.value = res.data;
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

function toggleShowLine(routeIndex) {
  showLine.value[routeIndex] = !showLine.value[routeIndex];

  const route = stopCityList.value[routeIndex];
  if (showLine.value[routeIndex]) {
    addMarkers(route);
  } else {
    removeMarkers(route);
  }
}

/* ================= map ================= */
function addMarkers(route) {
  if (!map.value) return;

  route.Stops.forEach(stop => {
    const lat = stop.StopPosition?.PositionLat;
    const lng = stop.StopPosition?.PositionLon;
    if (!lat || !lng) return;

    if (markersMap.has(stop.StopUID)) return;

    const marker = L.marker([lat, lng], {
      icon: L.icon({
        iconUrl,
        iconRetinaUrl,
        iconSize: [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -36],
        shadowUrl,
      }),
    }).addTo(map.value);

    marker.bindTooltip(stop.StopName.Zh_tw, {
      direction: "top",
      offset: [0, -10],
    });

    marker.on("click", () => {
      flyToStop(stop);
    });

    markersMap.set(stop.StopUID, marker);
  });
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
}

/* ================= utils ================= */
function directionText(val) {
  return val === 1 ? "去程" : "回程";
}
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
</style>
