<template>
    <MapLayout>

        <template #sidebar>
            <BusSidebar>
                <template #top>
                    <div ref="controlRef" class="control-container">
                        <div class="control-text">以「選單方式」查詢預估資訊</div>
                        <div class="control-icon" @click="handleFilter">
                            <span class="material-symbols-outlined"> tune </span>
                        </div>
                    </div>
                </template>



                <div ref="controlStatusRef" v-show="filterIcon" class="controlStatus-container">

                    <!-- {{ dataList?.Routes[0] }} -->

                    <el-check-tag v-for="(item, index) in dataList.Routes" :key="item.RouteID"
                        :checked="selectedIndex === index" @change="
                            (status) => onChange(status, index, item.RouteName.Zh_tw, item)
                        ">{{ item.RouteName.Zh_tw }}</el-check-tag>
                </div>
                <el-scrollbar class="scrollbar-content" :style="{'height':customHeight}">
                
                    <el-card class="card-content" v-if="selectedIndex !== null">

                        起點站 : {{ dataDetail.departureStopName }} <br />
                        終點站 : {{ dataDetail.endStop }} <br />

                        票價說明 : {{ dataDetail.ticketPriceDescription }} <br />
                        <span v-for="name in dataDetail?.operatorName" :key="name.OperatorID"
                            style="display: flex; align-items: center;">
                            <span style="font-size: 18px;" class="material-symbols-outlined">directions_subway</span>
                            {{ name.OperatorName.Zh_tw }}</span>


                        <div class="card-content__item" v-for="(item, index) in realTimeByFrequencyList"
                            :key="item.SubRouteID" @click="toggleShowLine(item)">

                            <h1 class="card-content__lable">

                                {{ item.SubRouteName.Zh_tw }}

                                <el-button :icon="ArrowRight" circle size="small" color="#6A994E" plain />
                            </h1>
                            <span class="text-unit text-red"> {{ dutyStatus(item.DutyStatus) }}</span>


                        </div>
                    </el-card>
                </el-scrollbar>
            </BusSidebar>
        </template>
        <template #map>
            <LeafletMap ref="mapRef" />
        </template>
    </MapLayout>

</template>




<script lang="ts" setup>
import { ref, onMounted, reactive, nextTick, onUnmounted } from "vue";
import { ArrowRight } from '@element-plus/icons-vue'
import L from "leaflet";

import MapLayout from "@/layouts/components/MapLayout.vue";
import LeafletMap from "@/components/map/LeafletMap.vue";
import BusSidebar from "@/components/bus/BusSidebar.vue";



import iconUrl from "@/assets/Vector-icon.png?url";
import iconRetinaUrl from "@/assets/Vector-icon-2x.png?url";
import shadowUrl from "@/assets/Vector-shadow.png?url";
import tdxRequest from "@/api/tdxApi";
import { useDataStore } from "@/stores/data";
const { networkApi } = useDataStore();
import { fetchTainanBusNetwork } from "@/utils/bus";
const { routesCity } = fetchTainanBusNetwork();

const dataList = ref([]);
const loading = ref(false);


const mapRef = ref<InstanceType<typeof LeafletMap> | null>(null);
const map = ref<L.Map | null>(null);
const mapLayer = ref<L.LayerGroup | null>(null);




const selectedIndex = ref<number | null>(null);
const realTimeByFrequencyList = ref([]);
type DataDetail = {
    departureStopName?: string; //起點站名稱
    destinationStopName?: string; //終點站名稱
    startStop?: string; //首站
    endStop?: string; //末站
    ticketPriceDescription?: string; //票價說明
    operatorName?: string; //營運業者
};
const dataDetail = reactive<DataDetail>({});


onMounted(async () => {
    await nextTick();

    if (mapRef.value?.getMap) {
        map.value = mapRef.value.getMap();
        console.log("Leaflet map ready", map.value);
    } else {
        console.warn("LeafletMap 尚未 ready");
    }

    init();
});

const filterIcon = ref(true);
const handleFilter = () => {
    filterIcon.value = !filterIcon.value;
};



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

const busIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],        // 預設 Leaflet marker 大小
    iconAnchor: [12, 41],      // marker 底部對齊座標點
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});


const toggleShowLine = (payload) => {
    console.log(payload, "payload");

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
    const poly = L.polyline(latlngs, {
        color: "#1976d2",
        weight: 4,
    }).addTo(mapLayer.value);


    latlngs.forEach(([lat, lng]) => {
        L.marker([lat, lng], {
            icon: busIcon,
        }).bindPopup(`${payload.SubRouteName.Zh_tw}`).addTo(mapLayer.value);
    });

    map.value.fitBounds(poly.getBounds(), {
        padding: [20, 20],
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


    } catch (e) {

        console.error('Initialization error:', e);
    } finally {
        loading.value = false;
    }
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


const customHeight = ref("");
const controlRef = ref(null);
const controlStatusRef = ref(null);

const updateScrollbarHeight = () => {
    if (controlRef.value || controlStatusRef.value) {
     
        const rect = controlRef.value.getBoundingClientRect();
        const rect2 = controlStatusRef.value.getBoundingClientRect();
           const totalOccupied = rect.height + rect2.height;
        customHeight.value = `calc(95vh - ${totalOccupied}px)`;
    }
};

onMounted(async () => {
    await nextTick();
    const observer = new ResizeObserver(() => {
        updateScrollbarHeight();
    });

    // 分別檢查並啟動監聽
    if (controlRef.value) {
        observer.observe(controlRef.value);
    }
    if (controlStatusRef.value) {
        observer.observe(controlStatusRef.value);
    }

    // 初始化執行一次
    updateScrollbarHeight();

    // 確保銷毀時清理
    onUnmounted(() => {
        observer.disconnect();
    });
});


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
</script>
<style lang="scss" scoped>
.scrollbar-content {
    height: 52vh;
}
</style>
