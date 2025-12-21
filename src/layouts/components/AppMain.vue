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
<style scoped lang="scss">
.app-main {
    height: 100vh;
    padding-left: 72px;
}


</style>

