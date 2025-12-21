<template>
  <div class="map-container">
    <el-container class="main-layout">
      <div class="sidebar" :class="{ active: sidebar.sidebarOpen }">
        <div
          class="title-container"
          v-for="item in title.Networks"
          :key="item.SubRouteUID"
        >
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

        <el-scrollbar v-loading="loading">
          <div class="control-container">
            <div class="control-text">以「選單方式」查詢預估資訊</div>
            	<div class="control-icon"  @click="handleFilter">
                 <span class="material-symbols-outlined"> tune </span>
              </div>
          </div>
          <div v-show="filterIcon" class="controlStatus-container">
        
              <el-check-tag
                v-for="(item, index) in dataList.Routes"
                :key="item.RouteID"
                :checked="selectedIndex === index"
                @change="(status) => onChange(status, index, item.RouteName.Zh_tw)"
                >{{ item.RouteName.Zh_tw }}</el-check-tag
              >
            </div>
            <el-select style="width: 100%" v-model="stationVal" placeholder="請選擇站名">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
        </el-scrollbar>
      </div>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { useUiStore } from "@/stores/ui";
import { useDataStore } from "@/stores/data";
const { networkApi } = useDataStore();
import { fetchTainanBusNetwork } from "@/utils/bus";
import tdxRequest from "@/api/tdxApi";
const { routesCity } = fetchTainanBusNetwork();
const title = ref([]);
const dataList = ref([]);
const loading = ref(false);
const sidebar = useUiStore();
const stationVal = ref("");
const selectedIndex = ref<number | null>(null);
const onChange = (status: boolean, index: number, name:string) => {
  if (status) {
    selectedIndex.value = index;
     realTimeByFrequency(name);
  } else if (selectedIndex.value === index) {
    selectedIndex.value = null;
  }
};

onMounted(() => {
  init();
});

const filterIcon = ref(false);
const handleFilter =()=>{
filterIcon.value =  !filterIcon.value;

}



function init() {
  try {
    routeApi();
   
    // networkApi().then((res) => {
    //   title.value = res;
    // });
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}
//公車定點資料
function realTimeByFrequency(routeName){
  tdxRequest.get(`/Bus/RealTimeByFrequency/City/Tainan/${routeName}?%24top=30&%24format=JSON`).then((res)=>{
       console.log(res);
  }).catch((err)=>{
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
</script>
<style scoped lang="scss">
.control-icon {
    display: inline-flex;
    cursor: pointer;
}

</style>
