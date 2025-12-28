<template>
    <MapLayout width="500px">

        <template #sidebar>
            <BusSidebar>
                <template #top>
                    <div ref="titleRef" class="title-container__label" style="padding: 10px 10px 0;">公車最新消息</div>
                </template>

                <el-scrollbar :style="{ 'height': customHeight }">

                    <el-empty v-if="!load.loading && dataList.length === 0" description="無資料" />
                    <el-descriptions column="1" border>
                        <el-descriptions-item :label="GetDateYYYYMMDD(item.SrcUpdateTime)"
                            v-for="(item, index) in dataList" :key="item.NewsID">
                            <div :class="['descriptions__item', { 'descriptions__active': showNewsContent[index] }]">
                                <el-link @click="handleNews(item, index)">{{ item.Title }}</el-link>
                                <el-tag size="small" type="success">{{ item.Department }}</el-tag>
                            </div>

                        </el-descriptions-item>

                    </el-descriptions>
                </el-scrollbar>


            </BusSidebar>
        </template>
        <div v-show="dataItem" class="news-container">
            <el-scrollbar :style="{ 'height': customHeight }">
                <h2 class="page-title">{{ dataItem?.Newses[0]?.Title }}</h2>
                <div v-show="showNewsContent.length > 0" v-html="dataItem?.Newses[0]?.Description" />

                <el-link :href="dataItem?.Newses[0]?.NewsURL" target="_blank">相關連結</el-link>
            </el-scrollbar>
        </div>
        <template #map>
            <LeafletMap ref="mapRef" />
        </template>
    </MapLayout>
    <el-drawer class="newsDrawer-container" modal-class="newsDrawer-container" v-model="drawer" direction="btt"
        size="100%" resizable @close="handleDrawer">
        <el-scrollbar style="height:100%">
            <h2 class="page-title">{{ dataItem?.Newses[0]?.Title }}</h2>
            <div v-show="showNewsContent.length > 0" v-html="dataItem?.Newses[0]?.Description" />

            <el-link :href="dataItem?.Newses[0]?.NewsURL" target="_blank">相關連結</el-link>
        </el-scrollbar>


    </el-drawer>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive, onUnmounted, nextTick } from "vue";
import MapLayout from "@/layouts/components/MapLayout.vue";
import LeafletMap from "@/components/map/LeafletMap.vue";
import BusSidebar from "@/components/bus/BusSidebar.vue";
import useDate from "@/utils/date"
import tdxRequest from "@/api/tdxApi";
import { useRouter } from "vue-router";

import { fetchTainanBusNetwork } from "@/utils/bus";
const { newslist } = fetchTainanBusNetwork();
import { useLoadingStore } from "@/stores/useLoading"
const load = useLoadingStore();
const drawer = ref(false)

const { GetDateYYYYMMDD } = useDate();

const dataList = ref<string[]>([]);
const dataItem = ref(null);

onMounted(() => {
    init();
});

async function init() {
    try {
        load.openLoading();
        const initialLoadPromises = [
            fetchBusNews(),

        ];
        await Promise.allSettled(initialLoadPromises);

    } catch (e) {
        console.error(e);
    } finally {
        load.closeLoading();
    }

}


const showNewsContent = ref<boolean[]>([]);
const handleNews = (item, index) => {
    console.log(item.NewsID);
    drawer.value = true;
    showNewsContent.value = []

    if (item) {
        showNewsContent.value[index] = true;
        fetchBusNewsItem(item.NewsID);

    }

    // router.push({
    //     name: "explainNews",
    //     params: { NewsID: item.NewsID },
    //     // 使用 history.state 傳整個物件，這樣不會顯示在 URL
    //     state: { item },
    // });
};

function fetchBusNews() {

    tdxRequest
        .get(
            `/Bus/News/City/Tainan?%24top=30&%24format=JSON`
        )
        .then((res) => {
            console.log(res);
            dataList.value = res.data.Newses;
            console.log(newslist, "newslist");
            // dataList.value = newslist.data.Newses;


        })
        .catch((err) => {
            console.log(err);
        });
}

function fetchBusNewsItem(NewsID) {
    console.log(NewsID, "NewsID");
    if (NewsID) {
        load.openLoading();
        tdxRequest.get(`/Bus/News/City/Tainan?$filter=contains(NewsID, '${NewsID}')&$format=JSON`).then((res) => {
            dataItem.value = res.data || null;

        }).finally(() => {

            load.closeLoading();
        });
    }
}


const handleDrawer = () => {
    load.closeLoading();
}

// 1. 修正初始化型別
const titleRef = ref<HTMLElement | null>(null);
const customHeight = ref("100vh"); // 給予一個初始預設值

const updateScrollbarHeight = () => {
    // 2. 增加安全檢查，確保 titleRef.value 存在
    if (titleRef.value) {
        const rect = titleRef.value.getBoundingClientRect().height;
        // 考慮到你的 layout 結構，可能需要減去 padding 或其他偏移量
        customHeight.value = `calc(95vh - ${rect}px - 20px)`;
    }
};

onMounted(async () => {
    await nextTick();

    // 初始化一次
    updateScrollbarHeight();

    // 3. ResizeObserver 邏輯
    const observer = new ResizeObserver(() => {
        updateScrollbarHeight();
    });

    if (titleRef.value) {
        observer.observe(titleRef.value);
    }

    // 在組件銷毀時停止監聽，防止內存洩漏
    onUnmounted(() => {
        observer.disconnect();
    });
});

</script>
<style lang="scss" scoped>
.descriptions__item {
    display: flex;
    gap: 8px;
    align-items: center;

    @media (max-width: 575px) {
        align-items: flex-start;
        flex-direction: column;
    }
}

:deep(.layout-container) {
    @media (max-width: 575px) {
        height: 91vh;
        top: 9%;

    }
}
</style>
