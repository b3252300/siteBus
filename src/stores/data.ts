import { defineStore } from "pinia";
import tdxRequest from "@/api/tdxApi";
import { ref } from "vue";

export const useDataStore = defineStore("dataTable", () => {
  // 將 title 設為陣列型態，方便存放多筆資料並判斷是否已快取
  const title = ref([]);

  // 若已有資料則不再呼叫 API
  const networkApi = async () => {
    if (title.value && title.value.length > 0) return;
    try {
      const res = await tdxRequest.get(
        "/Bus/Network/City/Tainan?%24top=30&%24format=JSON"
      );
      // 正確指派回傳資料到 title
 
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {

    networkApi,
  };
});
