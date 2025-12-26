<template>
    <MapLayout>

        <template #sidebar>
            <BusSidebar></BusSidebar>
        </template>
        <template #map>
            <LeafletMap ref="mapRef" />
        </template>
    </MapLayout>

</template>




<script lang="ts" setup>

import { ref, onMounted } from "vue";
import L from "leaflet";

import MapLayout from "@/layouts/components/MapLayout.vue";
import LeafletMap from "@/components/map/LeafletMap.vue";
import BusSidebar from "@/components/bus/BusSidebar.vue";

import tdxRequest from "@/api/tdxApi";

import iconUrl from "@/assets/Vector-icon.png?url";
import iconRetinaUrl from "@/assets/Vector-icon-2x.png?url";
import shadowUrl from "@/assets/Vector-shadow.png?url";s

const loading = ref(false);
const mapRef = ref(null);
</script>
