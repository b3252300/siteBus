<template>
  <div class="map-container">
    <el-container class="main-layout">
      <div class="sidebar" :class="{ active: sidebar.sidebarOpen }">
        <div class="title-container" v-for="item in title?.Networks" :key="item.SubRouteUID">
          <h2 class="title-container__lable">{{ item.NetworkName.Zh_tw }}</h2>
          <div class="title-container_sublable">{{ item.NetworkName.En }}</div>
        </div>
        <!-- <div class="control-container">
          <el-radio-group
            v-model="vaildControl"
            fill="#3e835e"
            @change="handleControl"
            size="small"
          >
            <el-radio-button label="去程" value="go" />
            <el-radio-button label="往返" value="back" />
          </el-radio-group>
        </div> -->

        <el-scrollbar v-loading="loading" style="padding:10px">
          <div class="control-container">
            <div class="control-text">以「選單方式」查詢預估資訊</div>
            <div class="control-icon" @click="handleFilter">
              <span class="material-symbols-outlined"> tune </span>
            </div>
          </div>
          <div v-show="filterIcon" class="controlStatus-container">
            <!-- {{ dataList?.Routes[0] }} -->

            <el-check-tag v-for="(item, index) in dataList.Routes" :key="item.RouteID"
              :checked="selectedIndex === index" @change="
                (status) => onChange(status, index, item.RouteName.Zh_tw, item)
              ">{{ item.RouteName.Zh_tw }}</el-check-tag>
          </div>
          <el-card class="card-content" v-if="selectedIndex !== null">

            起點站 : {{ dataDetail.departureStopName }} <br />
            終點站 : {{ dataDetail.endStop  }} <br />

            票價說明 : {{ dataDetail.ticketPriceDescription }} <br />
            <span v-for="name in dataDetail?.operatorName" :key="name.OperatorID" style="display: flex; align-items: center;">
              <span  style="font-size: 18px;" class="material-symbols-outlined">directions_subway</span> {{name.OperatorName.Zh_tw}}</span>


            <div class="card-content__item" v-for="(item, index) in realTimeByFrequencyList" :key="item.SubRouteID"
              @click="toggleShowLine(item)">

              <h1 class="card-content__lable">

                {{ item.SubRouteName.Zh_tw }}
                
                <el-button :icon="ArrowRight" circle size="small" color="#6A994E" plain />
              </h1>
              <span class="text-unit text-red"> {{ dutyStatus(item.DutyStatus) }}</span>


            </div>
          </el-card>
        </el-scrollbar>
      </div>
      <el-main class="map-wrapper">
        <div id="map"></div>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import { ArrowRight } from '@element-plus/icons-vue'
import iconUrl from "@/assets/Vector-icon.png?url";
import iconRetinaUrl from "@/assets/Vector-icon-2x.png?url";
import shadowUrl from "@/assets/Vector-shadow.png?url";
import { useUiStore } from "@/stores/ui";
import { useDataStore } from "@/stores/data";
const { networkApi } = useDataStore();
import { fetchTainanBusNetwork } from "@/utils/bus";
import tdxRequest from "@/api/tdxApi";
const { routesCity } = fetchTainanBusNetwork();

// Leaflet
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const title = ref([]);
const dataList = ref([]);
const realTimeByFrequencyList = ref([]);
const loading = ref(false);
const sidebar = useUiStore();
const activeIndex = ref(null);
const selectedIndex = ref<number | null>(null);

type DataDetail = {
  departureStopName?: string; //起點站名稱
  destinationStopName?: string; //終點站名稱
  startStop?: string; //首站
  endStop?: string; //末站
  ticketPriceDescription?: string; //票價說明
  operatorName?: string; //營運業者
};
const dataDetail = reactive<DataDetail>({});

const onChange = (
  status: boolean,
  index: number,
  name: string,
  detail: string
) => {
  console.log(detail, "detail");
  if (status) {
    selectedIndex.value = index;
    dataDetail.departureStopName = detail.DepartureStopName.Zh_tw;
    dataDetail.destinationStopName = detail.DestinationStopName.Zh_tw;
    dataDetail.startStop = detail.StartStop.Zh_tw;
    dataDetail.endStop = detail.EndStop.StopName.Zh_tw;
    dataDetail.ticketPriceDescription = detail.TicketPriceDescription.Zh_tw;
    dataDetail.operatorName = detail.Operators

    realTimeByFrequency(name);
  } else if (selectedIndex.value === index) {
    selectedIndex.value = null;
  }
};

// map refs
const map = ref<any>(null);
const mapLayer = ref<any>(null);

onMounted(() => {
  init();

});

// 使用 Retina 圖示作為公車 marker
const busIcon = L.icon({
  iconUrl: iconRetinaUrl,
  iconRetinaUrl: iconRetinaUrl,
  iconSize: [28, 28],
  shadowUrl,
  iconAnchor: [14, 28],
  popupAnchor: [0, -28],
});

const filterIcon = ref(true);
const handleFilter = () => {
  filterIcon.value = !filterIcon.value;
};

const toggleShowLine = (payload) => {
  console.log(payload);

  let positions = payload;
  const info = payload && payload.BusPosition ? payload : null;
  if (info) positions = payload.BusPosition;

  if (typeof positions === "string") {
    try {
      positions = JSON.parse(positions);
    } catch (e) {
      // 非 JSON 字串，無法解析
    }
  }

  // 若 positions 是物件且非陣列，嘗試取常見巢狀欄位或單一座標欄位
  if (positions && !Array.isArray(positions) && typeof positions === "object") {
    if (Array.isArray(positions.Positions)) positions = positions.Positions;
    else if (Array.isArray(positions.Stops)) positions = positions.Stops;
    else if (Array.isArray(positions.Geo)) positions = positions.Geo;
    else if (positions.Position) positions = positions.Position;
    else if (positions.location && Array.isArray(positions.location))
      positions = positions.location;
    else if (positions.Lat !== undefined && positions.Lon !== undefined)
      positions = [[positions.Lat, positions.Lon]];
    else if (
      positions.PositionLat !== undefined &&
      positions.PositionLon !== undefined
    )
      positions = [[positions.PositionLat, positions.PositionLon]];
    else if (
      positions.PositionLon !== undefined &&
      positions.PositionLat !== undefined
    )
      positions = [[positions.PositionLat, positions.PositionLon]];
    else if (
      positions.StopPositionLat !== undefined &&
      positions.StopPositionLon !== undefined
    )
      positions = [[positions.StopPositionLat, positions.StopPositionLon]];
    else if (positions.Y !== undefined && positions.X !== undefined)
      positions = [[positions.Y, positions.X]];
    else if (
      positions.latitude !== undefined &&
      positions.longitude !== undefined
    )
      positions = [[positions.latitude, positions.longitude]];
  }

  if (!map.value) return;

  // 清除舊圖層
  if (mapLayer.value) {
    mapLayer.value.clearLayers();
  } else {
    mapLayer.value = L.layerGroup().addTo(map.value);
  }

  if (!positions || positions.length === 0) {
    console.warn("toggleShowLine: no positions found", { payload });
    return;
  }

  // 嘗試解析座標
  const latlngs: Array<[number, number]> = [];
  const first = positions[0];

  if (Array.isArray(first) && first.length >= 2) {
    const maybeLat = Number(first[0]);
    if (!Number.isNaN(maybeLat) && Math.abs(maybeLat) <= 90) {
      positions.forEach((p: any) => latlngs.push([Number(p[0]), Number(p[1])]));
    } else {
      positions.forEach((p: any) => latlngs.push([Number(p[1]), Number(p[0])]));
    }
  } else if (typeof first === "object") {
    positions.forEach((p: any) => {
      if (p.Lat !== undefined && p.Lon !== undefined)
        latlngs.push([Number(p.Lat), Number(p.Lon)]);
      else if (p.Latitude !== undefined && p.Longitude !== undefined)
        latlngs.push([Number(p.Latitude), Number(p.Longitude)]);
      else if (p.PositionLat !== undefined && p.PositionLon !== undefined)
        latlngs.push([Number(p.PositionLat), Number(p.PositionLon)]);
      else if (
        p.StopPositionLat !== undefined &&
        p.StopPositionLon !== undefined
      )
        latlngs.push([Number(p.StopPositionLat), Number(p.StopPositionLon)]);
      else if (p.Y !== undefined && p.X !== undefined)
        latlngs.push([Number(p.Y), Number(p.X)]);
      else if (p.lat !== undefined && p.lng !== undefined)
        latlngs.push([Number(p.lat), Number(p.lng)]);
      else if (p.longitude !== undefined && p.latitude !== undefined)
        latlngs.push([Number(p.latitude), Number(p.longitude)]);
      else if (p[0] !== undefined && p[1] !== undefined) {
        const a0 = Number(p[0]);
        const a1 = Number(p[1]);
        if (!Number.isNaN(a0) && Math.abs(a0) <= 90) latlngs.push([a0, a1]);
        else latlngs.push([a1, a0]);
      }
    });
  }

  if (latlngs.length === 0) {
    console.warn("toggleShowLine: parsed 0 latlngs", { positions, payload });
    return;
  }

  // 繪製 polyline
  const poly = L.polyline(latlngs, { color: "#1976d2", weight: 4 }).addTo(
    mapLayer.value
  );

  // popup title
  const popupTitle =
    info?.SubRouteName?.Zh_tw ||
    info?.SubRouteName ||
    info?.RouteName?.Zh_tw ||
    info?.RouteUID ||
    "資訊";

  // 加入 marker（使用 Retina 圖示），並在有 info 時綁定 popup
  latlngs.forEach((ll) => {
    const m = L.marker(ll, { icon: busIcon }).addTo(mapLayer.value);
    if (info) {
      const snippet: any = {};
      if (info.VehicleID) snippet.VehicleID = info.VehicleID;
      if (info.SrcUpdateTime) snippet.SrcUpdateTime = info.SrcUpdateTime;
      if (info.Direction) snippet.Direction = info.Direction;
      const details = Object.keys(snippet).length
        ? JSON.stringify(snippet, null, 2)
        : JSON.stringify(info, Object.keys(info).slice(0, 6), 2);
      const popupHtml = `<strong>${popupTitle}</strong>`;
      m.bindPopup(popupHtml);
    }
  });

  // 調整地圖視野
  try {
    map.value.fitBounds(poly.getBounds(), { padding: [20, 20] });
  } catch (e) {
    console.error(e);
  }
};

async function init() {
  try {
    loading.value = true;
    

    const initialLoadPromises = [
      routeApi(), 
      networkApi()
    ];

  
    const results = await Promise.allSettled(initialLoadPromises);


    const routeResult = results[0];
    const networkResult = results[1];

    if (routeResult.status === 'rejected') {
      console.error('Route API Failed:', routeResult.reason);
    }
    
    // 假設你要拿 networkApi 的回傳值設定 title
    if (networkResult.status === 'fulfilled') {
       // 如果 networkApi 有 return data
       // title.value = networkResult.value; 
    }

    // 資料都準備好後，才初始化地圖
    initMap(); 

  } catch (e) {
 
    console.error('Initialization error:', e);
  } finally {
    loading.value = false;
  }
}
//公車定點資料
function realTimeByFrequency(routeName) {
  realTimeByFrequencyList.value = [];
  tdxRequest
    .get(
      `/Bus/RealTimeByFrequency/City/Tainan/${routeName}?%24top=30&%24format=JSON`
    )
    .then((res) => {
      console.log(res);
      realTimeByFrequencyList.value = res.data.A1Datas;
    })
    .catch((err) => {
      console.log(err);
    });
}

function routeApi() {
  dataList.value = routesCity;

  //   tdxRequest
  //     .get("/Bus/Route/City/Tainan?%24top=30&%24format=JSON")
  //     .then((res) => {
  //         dataList.value = res.data;
  //       console.log(res.data.Routes);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}

function dutyStatus(status) {
  let text = "";
  if (status === 0) {
    text = "正常營運";
  } else if (status === 1) {
    text = "暫停營運";
  } else if (status === 2) {
    text = "末班車已過";
  }
  return text;
}

function initMap() {
  // 初始化 Leaflet 地圖，若已存在則跳過
  if (map.value) return;
  // 以台南為中心預設座標
  map.value = L.map("map", { zoomControl: true }).setView([23.0, 120.2], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map.value);

  mapLayer.value = L.layerGroup().addTo(map.value);
}
</script>
<style scoped lang="scss">
.control-icon {
  display: inline-flex;
  cursor: pointer;
}

/* Map container must have height so Leaflet can render */
#map {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.map-wrapper {
  height: 100%;
}

.card-content {
  margin-top: 10px;
}
</style>
