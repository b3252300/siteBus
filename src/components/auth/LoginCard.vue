<template>
  <div class="login-overlay">
  
    <div class="bg-overlay"></div>
    <el-card class="login-card" shadow="never">
      <template #header>
        <h2 class="title-header" style="text-align: center; margin: 0">
          登入
        </h2>
      </template>

      <div class="login-steps">
        <div class="step-box">
          <div v-show="!user.google.id" id="google_btn_wrapper" class="center-flex"></div>
          <div v-if="user.google.id" class="authenticated-info">
             <el-avatar :src="user.google.picture" />
            <span class="success-text">Google 已驗證: {{ user.google.name }}</span>
          </div>
        </div>

        <div class="step-box">
          <div v-if="!user.facebook.id">
            <el-button class="btn-facebook" size="large" @click="handleFBLogin"
              style="width: 250px; border-radius: 4px;">
              <img src="@/assets/facebook.png" alt="FB">
              Facebook
            </el-button>
          </div>
          <div v-else class="authenticated-info">
            <el-avatar :src="user.facebook.picture" />
            <span class="success-text">Facebook 已綁定: {{ user.facebook.name }}</span>
          </div>
        </div>

        <div class="step-box">
          <div v-if="!user.line.id">
            <el-button class="btn-line" size="large" @click="handleLineLogin" 
              style="width: 250px; border-radius: 4px; background-color: #06C755; color: white; border: none;">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" style="height: 20px; margin-right: 8px;" alt="LINE"> 
              LINE 登入
            </el-button>
          </div>
          <div v-else class="authenticated-info">
            <el-avatar :src="user.line.picture" />
            <span class="success-text">LINE 已綁定: {{ user.line.name }}</span>
          </div>
        </div>

        <el-link underline="hover" @click="handleReturn">返回</el-link>
      </div>
     
    </el-card>
  </div>
</template>

<script setup>
import { reactive, onMounted, nextTick } from "vue";
import { ElMessage, ElNotification } from "element-plus";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import liff from "@line/liff";

const authStore = useAuthStore();

// 建議將這些 ID 移至 .env 檔案
const GOOGLE_CLIENT_ID = "737444360335-03fp8kjs1alt73gi9dnr700ki5j12uhc.apps.googleusercontent.com";
const FB_APP_ID = "1943332376223447";
const LINE_LIFF_ID = "2008860930-zwC6uFAG"; 

const emit = defineEmits(["login-success"]);

const user = reactive({
  google: { id: null, name: null, picture: null },
  facebook: { id: null, name: null, picture: null },
  line: { id: null, name: null, picture: null },
});

onMounted(() => {
  // 1. 初始化時先同步 Store 中的狀態 (避免重整後看起來像未登入)
  syncUserFromStore();
  
  // 2. 載入 SDK
  loadGoogleSDK();
  loadFacebookSDK();
  loadLineSDK();
});

const syncUserFromStore = () => {
  // 假設 authStore 裡面的結構跟 user 一致，如果不一致請自行調整映射
  if (authStore.user) {
    if (authStore.user.google) user.google = authStore.user.google;
    if (authStore.user.facebook) user.facebook = authStore.user.facebook;
    if (authStore.user.line) user.line = authStore.user.line;
  }
};

// --- Google Logic ---
const loadGoogleSDK = () => {
  if (window.google && window.google.accounts) {
    initGoogleButton();
  } else {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      initGoogleButton();
    };
    document.head.appendChild(script);
  }
};

const initGoogleButton = () => {
  window.google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleGoogleResponse,
  });

  // 使用 nextTick 確保 DOM 元素存在
  nextTick(() => {
    const btnWrapper = document.getElementById("google_btn_wrapper");
    if (btnWrapper) {
      window.google.accounts.id.renderButton(btnWrapper, {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "rectangular",
        logo_alignment: "left",
        width: 250,
      });
    }
  });
};

const handleGoogleResponse = (response) => {
  const payload = JSON.parse(
    decodeURIComponent(escape(atob(response.credential.split(".")[1])))
  );

  user.google = {
    id: payload.sub,
    name: payload.name,
    picture: payload.picture,
  };

  userEmits();
  ElMessage.success(`Google 登入成功: 歡迎 ${payload.name}`);
};

// --- Facebook Logic ---
const loadFacebookSDK = () => {
  if (window.FB) return;
  
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: FB_APP_ID,
      cookie: true,
      xfbml: true,
      version: "v24.0",
    });
    window.FB.AppEvents.logPageView();
  };
  
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
};

const handleFBLogin = () => {
  if (!window.FB) return;
  window.FB.login(
    (response) => {
      if (response.authResponse) {
        window.FB.api("/me", { fields: "name, picture" }, (userInfo) => {
          user.facebook = {
            id: userInfo.id,
            name: userInfo.name,
            picture: userInfo.picture.data.url,
          };
          userEmits();
          ElMessage.success(`Facebook 登入成功: ${userInfo.name}`);
        });
      } else {
        ElMessage.warning("Facebook 登入取消");
      }
    },
    { scope: "public_profile" }
  );
};

// --- LINE Logic ---
const initializeLiff = async () => {
  try {

    await liff.init({ liffId: LINE_LIFF_ID });
    
    // 如果是用戶從 LINE 登入頁面被導回來，這個條件會是 true
    if (liff.isLoggedIn()) {
      await getLineProfile();
    }
  } catch (err) {
    console.error("LIFF Initialization failed", err);
  }
};

const loadLineSDK = () => {

  if (liff) {
     initializeLiff();
     return;
  }
  const script = document.createElement("script");
  script.src = "https://static.line-scdn.net/liff/edge/2/sdk.js";
  script.async = true;
  script.onload = () => {
    initializeLiff();
  };
  document.head.appendChild(script);
};

const handleLineLogin = () => {
  if (!liff) return;
  if (!liff.isLoggedIn()) {
    // 導向 LINE 登入頁面 (會離開當前頁面)
    liff.login();
  } else {
    getLineProfile();
  }
};

const getLineProfile = async () => {
  try {
    const profile = await liff.getProfile();
    console.log(profile, "profile");
    user.line = {
      id: profile.userId,
      name: profile.displayName,
      picture: profile.pictureUrl,
    };
    userEmits();
    ElMessage.success(`LINE 登入成功: ${profile.displayName}`);
  } catch (err) {
    console.error("Error getting profile", err);
  }
};

// --- Common Logic ---
const handleReturn = () => {
  router.push({ path: "/mapRoute" });
};

// 修正：合併後的單一 userEmits 函數
function userEmits() {
  // 更新 Pinia Store
  authStore.setUser({
    google: user.google,
    facebook: user.facebook,
    line: user.line,
  });

  // 通知父組件
  emit("login-success", {
    google: user.google,
    facebook: user.facebook,
    line: user.line,
  });
}
</script>

<style lang="scss" scoped>
/* 樣式保持原樣，僅微調圖片 alt 屬性建議在 template 中加入 */
.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(139 139 139 / 91%);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-overlay {
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(5px);
  opacity: 0.4;
}

.login-card {
  width: 400px;
  position: relative;
  z-index: 2;

  :deep(.el-card__body) {
    padding: calc(var(--el-card-padding) - 2px) var(--el-card-padding);
  }
}

.step-box {
  margin-bottom: 20px;
  text-align: center;
}

.center-flex {
  display: flex;
  justify-content: center;
}

.authenticated-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #e9f4ee;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid #e1f3d8;

  .el-avatar {
    --el-avatar-size: 26px;
  }
}

.success-text {
  color: #4ea476;
}

.title-header {
  color: #408560;
  font-weight: 500;
}

.btn-facebook {
  color: #3c4043;
  font-weight: 700;
  position: relative;
  
  :deep(span) {
    align-items: center;
    display: flex;
    position: relative;
    width: 100%;
    justify-content: center;

    img {
      height: 20px;
      background: #fff;
      position: absolute;
      left: -6px;
      top: -2px;
    }
  }
}

.login-steps {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>