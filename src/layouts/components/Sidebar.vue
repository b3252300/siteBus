<template>

  <el-button @click="drawer = true" class="sidebar-menu">
    <span class="material-symbols-outlined">
      menu
    </span>
  </el-button>
  <div class="sidebar-container">

    <div class="menu-list">
      <div class="menu-list__item" @click="handleSortOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined"> search_insights </span>
        </div>

        <div>路線站序</div>
      </div>

      <div class="menu-list__item" @click="handleMapSearchOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined"> explore_nearby </span>

        </div>

        <div>站位查詢</div>
      </div>
      <div class="menu-list__item" @click="handleExplainOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined">layers</span>

        </div>

        <div>其他資訊</div>
      </div>

      <div class="menu-list__fixed">



        <div v-if="user.google.id === null && user.facebook.id === null" class="menu-list__item" @click="handleLogin">
          <div class="menu-list__icon">
            <span class="material-symbols-outlined">
              person_2
            </span>

          </div>

          <div>登入</div>
        </div>
        <div v-else>

          <el-popover placement="right" :width="150" trigger="click">

            <el-link ref="signOutRef" underline="hover" @click="signOut(user)">登出</el-link>
            <template #reference>
              <div class="login-out">
                <template v-if="user.google.picture">
                  <img class="login-img" :src="user.google.picture">
                  {{ user.google.name }}
                </template>
                <template v-if="user.facebook.picture">
                  <img class="login-img" :src="user.facebook.picture">
                  {{ user.facebook.name }}

                </template>


              </div>

            </template>

          </el-popover>


        </div>
      </div>


    </div>
  </div>
  <el-drawer v-model="drawer" direction="ltr" size="72px">

    <div class="menu-list">
      <div class="menu-list__item" @click="handleSortOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined"> search_insights </span>
        </div>

        <div>路線站序</div>
      </div>

      <div class="menu-list__item" @click="handleMapSearchOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined"> explore_nearby </span>

        </div>

        <div>站位查詢</div>
      </div>
      <div class="menu-list__item" @click="handleExplainOpen">
        <div class="menu-list__icon">
          <span class="material-symbols-outlined">layers</span>

        </div>

        <div>其他資訊</div>
      </div>


    </div>



  </el-drawer>
</template>
<script lang="ts" setup>
import { onMounted, ref, watchEffect } from "vue";
import router from "@/router";
import { useUiStore } from "@/stores/ui";
const sidebar = useUiStore();

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
console.log(authStore.user, "authStore");


const user = ref();

watchEffect(() => {

  user.value = authStore.user;

});

const handleMapSearchOpen = () => {

  drawer.value = false;
  router.push({ path: "/mapSearch" });
  if (!sidebar.sidebarOpen) {
    sidebar.toggleSidebar();
  }

}


const drawer = ref(false);

const handleSortOpen = () => {
  drawer.value = false;
  router.push({ path: "/mapRoute" });
  // if (!sidebar.sidebarOpen) {
  //   sidebar.toggleSidebar();
  // }
}

const handleExplainOpen = () => {
  drawer.value = false;
  router.push({ path: "/explain" });
}
const handleLogin = () => {
  router.push({ path: "/login" });

}
function signOut(user) {

  if(user.google.id !== null){
     authStore.logoutGoogle();
       router.push({ path: "/mapRoute" });
  }
 if(user.facebook.id !== null){
     authStore.logoutFacebook();
       router.push({ path: "/mapRoute" });
  }

}


</script>
<style scoped lang="scss">
.sidebar-menu {
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 1001;
  background: var(--el-color-primary);
  width: 50px;
  height: 40px;
  color: #fff;
  display: none;
  padding: 0;

  @media (max-width: 575px) {
    display: block;
  }
}

.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 72px;
  height: 100vh;
  background: #f5f5f5;
  z-index: 101;

  display: block;

  @media (max-width: 575px) {
    display: none;
  }
}

.menu-list {
  font-size: 12px;
  text-align: center;
  display: grid;
  justify-content: center;
  padding-top: 3rem;
  gap: 1.6rem;
}

.menu-list__item {
  text-align: center;
  cursor: pointer;

  &:hover,
  &:focus {
    .menu-list__icon {
      background: #ddd;
    }
  }
}

.menu-list__icon {

  width: 48px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 0 auto;
}

.menu-list__fixed {
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: solid #fff 1px;
}

.login-out {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}
</style>
