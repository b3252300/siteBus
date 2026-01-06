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


          <div v-if="!user.google.id" id="google_btn_wrapper" class="center-flex"></div>
          <div v-else class="authenticated-info">
            <!-- <el-avatar :src="user.google.picture" />
            <span class="success-text">Google 已驗證: {{ user.google.name }}</span> -->
          </div>
        </div>

        <div class="step-box">

          <div v-if="!user.facebook.id">
            <el-button class="btn-facebook" size="large" @click="handleFBLogin"
              style="width: 250px;  border-radius: 4px;">

              <img src="@/assets/facebook.png">

              Facebook
            </el-button>
          </div>
          <div v-else class="authenticated-info">
            <el-avatar :src="user.facebook.picture" />
            <span class="success-text">Facebook 已綁定: {{ user.facebook.name }}</span>
          </div>
        </div>
      <el-link underline="hover"  @click="handleReturn">返回</el-link>
        <!-- <div class="btn-Retrun">返回</div> -->


        <!-- <el-button
          type="success"
          size="large"
          class="enter-btn"
          color="#4EA476"
          style="color: #fff"
          @click="handleEnter"
        >
          進入查詢地圖
        </el-button> -->
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, onMounted, nextTick } from "vue";
import { ElMessage, ElNotification } from "element-plus";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const GOOGLE_CLIENT_ID =
  "737444360335-03fp8kjs1alt73gi9dnr700ki5j12uhc.apps.googleusercontent.com";
const FB_APP_ID = "1943332376223447";

const emit = defineEmits(["login-success"]);

const user = reactive({
  google: { id: null, name: null, picture: null },
  facebook: { id: null, name: null, picture: null },
});

onMounted(() => {
  loadGoogleSDK();
  loadFacebookSDK();
});

const loadGoogleSDK = () => {
  if (window.google && window.google.accounts) {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });

    const btnWrapper = document.getElementById("google_btn_wrapper");
    if (btnWrapper) {
      window.google.accounts.id.renderButton(btnWrapper, {
        theme: "outline",      // 設定為白底灰框樣式 
        size: "large",         // 按鈕大小
        text: "signin_with",   // 設定文字為 "Sign in with Google" 
        shape: "rectangular",  // 設定形狀為矩形 (預設值，可省略)
        logo_alignment: "left",// Logo 靠左 (預設值，可省略)
        width: 250,            // 您設定的寬度
      });
    }
  } else {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      loadGoogleSDK();
    };
    document.head.appendChild(script);
  }
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

  // authStore.setUser({
  //   google: user.google,
  //   facebook: user.facebook,
  // });
   
  // emit("login-success", {
  //   google: user.google,
  //   facebook: user.facebook,
  // });
  userEmits();
  ElMessage.success(`Google 登入成功: 歡迎 ${payload.name}`);
};

const loadFacebookSDK = () => {
  if (window.FB) {
    return;
  }
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: FB_APP_ID,
      cookie: true,
      xfbml: true,
      version: "v24.0",
    });
    FB.AppEvents.logPageView();
  };
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
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





const handleReturn = () => {
  router.push({ path: "/mapRoute" });


}
const handleEnter = async () => {
  await nextTick();
  if (!user.google.id) {
    ElNotification({
      title: "提示",
      message: "您尚未登入喔",
    });
    return;
  }

  // 將使用者資訊傳回父元件
  emit("login-success", {
    google: user.google,
    facebook: user.facebook,
  });
};


function userEmits(){

  authStore.setUser({
    google: user.google,
    facebook: user.facebook,
  });
   
  emit("login-success", {
    google: user.google,
    facebook: user.facebook,
  });

}
</script>

<style lang="scss" scoped>
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
  //background: url(/sitemap/src/assets/login-img.jpeg) no-repeat;
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

.enter-btn {
  width: 100%;
  margin-top: 20px;
  font-weight: bold;
}

.title-header {
  color: #408560;
  font-weight: 500;
}

:deep {
  .el-divider__text {
    white-space: nowrap;
  }

  .el-card__body {
    padding: 10px;
  }
}

.btn-Retrun {
  padding: 10px;
  text-align: center;
  width: 100%;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}


.btn-facebook {
  color: #3c4043;
  font-weight: 700;
position: relative;
 :deep(span)  {
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
