<template>
  <div ref="mapRef" class="leaflet-map"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import L from "leaflet";

const mapRef = ref(null);
const map = ref(null);

const props = defineProps({
  center: {
    type: Array,
    default: () => [23.0, 120.2],
  },
  zoom: {
    type: Number,
    default: 12,
  },
});

onMounted(() => {
  map.value = L.map(mapRef.value).setView(props.center, props.zoom);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
  }).addTo(map.value);
});

/** 對外暴露方法 */
defineExpose({
  getMap: () => map.value,
});
</script>

<style scoped>
.leaflet-map {
  width: 100%;
  height: 100%;
}
</style>
