<template>
    <div class="main-container">
        {{ dataItem }}
        <div v-if="dataItem">
            <h2>{{ dataItem.Title }}</h2>
            <p v-if="dataItem.Content" v-html="dataItem.Content"></p>
            <p>Department: {{ dataItem.Department }}</p>
            <p>Update: {{ dataItem.SrcUpdateTime }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import tdxRequest from "@/api/tdxApi";

const route = useRoute();
const dataItem = ref<any>(null);
const NewsID = route.params.NewsID as string | undefined;
console.log(NewsID, "NewsID");
onMounted(() => {
    // 優先使用 history.state 中的 item（不會顯示在 URL）
    const state = window.history.state;
    // if (NewsID) {
    // if (state && state.item) {
    //     dataItem.value = state.item;
    //     return;
    // }
    // }
    // 若沒有 state，則用 NewsID 去後端抓資料
    if (NewsID) {
        tdxRequest.get(`/Bus/News/City/Tainan?$filter=contains(NewsID, '${NewsID}')&$format=JSON`).then((res) => {
            dataItem.value = res.data || null;
        });


    }
});
</script>