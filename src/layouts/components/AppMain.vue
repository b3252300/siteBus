<template>
  <div class="app-main">

    <router-view :key="$route.fullPath" v-slot="{ Component }">     
        <keep-alive>
          <component :is="Component" :key="key" />
        </keep-alive>
    </router-view>


  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';



  const route = useRoute();

  

  const key = computed(() => route.path);
 


  defineOptions({
    name: 'AppMain',
  });
</script>

