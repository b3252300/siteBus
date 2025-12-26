import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {

const loading = ref(false);

function closeLoading() {
  loading.value = false;
}


function openLoading() {
  loading.value = true;
}

return { loading, closeLoading, openLoading };

});