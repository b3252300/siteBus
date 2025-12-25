<template>
  
    <div class="main-container">
        <el-descriptions title="公車最新消息" column="1" border>


            <el-descriptions-item :label="GetDateYYYYMMDD(item.SrcUpdateTime)" v-for="item in dataList"
                :key="item.NewsID">
                <div style="display: flex; gap:8px; align-items: center;">
                    <el-link target="_blank"  @click="handleNews(item)">{{ item.Title }}</el-link>
                    <el-tag size="small" type="success">{{ item.Department }}</el-tag>
                </div>

            </el-descriptions-item>

        </el-descriptions>
    </div>

</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import useDate from "@/utils/date"
import tdxRequest from "@/api/tdxApi";
import { useRouter } from "vue-router";
const router = useRouter();
const { GetDateYYYYMMDD } = useDate();

const loading = ref(false);
const dataList = ref<string[]>([]);

onMounted(() => {
    init();
});

async function init() {
    try {
        loading.value = true;
        const initialLoadPromises = [
            fetchBusNews(),

        ];
        await Promise.allSettled(initialLoadPromises);

    } catch (e) {
        console.error(e);
    } finally {
        loading.value = false;
    }

}



const handleNews = (item) => {
    console.log(item.NewsID);
    router.push({
        name: "explainNews",
        params: { NewsID: item.NewsID },
        // 使用 history.state 傳整個物件，這樣不會顯示在 URL
        state: { item },
    });
};

function fetchBusNews() {
    tdxRequest
        .get(
            `/Bus/News/City/Tainan?%24top=30&%24format=JSON`
        )
        .then((res) => {
            console.log(res);
            dataList.value = res.data.Newses

        })
        .catch((err) => {
            console.log(err);
        });
}






</script>
