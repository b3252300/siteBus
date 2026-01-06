import { defineStore } from "pinia";
import { ref } from "vue";

/**
 * 認證狀態管理 Store
 * 負責管理用戶的登入/登出狀態和用戶信息
 * 支持 Google 和 Facebook 兩種登入方式
 */
export const useAuthStore = defineStore("auth", () => {
  // 用戶信息物件，包含 Google 和 Facebook 的認證信息
  const user = ref({
    google: { id: null, name: null, picture: null },
    facebook: { id: null, name: null, picture: null },
  });

  // 認證狀態標誌：true 表示已登入，false 表示未登入
  const isAuthenticated = ref(false);

  /* 設置用戶信息，用戶信息物件 */
  const setUser = (userInfo) => {
    user.value = userInfo;
    // 根據是否有 Google ID 來判斷認證狀態
    isAuthenticated.value = !!userInfo.google.id;
  };

  /*
   * 清除用戶信息
   * 將用戶數據重置為初始狀態，並更新認證狀態為 false
   */
  const clearUser = () => {
    user.value = {
      google: { id: null, name: null, picture: null },
      facebook: { id: null, name: null, picture: null },
    };
    isAuthenticated.value = false;
  };

  const logoutGoogle = () => {
    const isGoogleLogin = !!user.value.google.id;

    if (isGoogleLogin && window.google && window.google.accounts) {
      // 這會讓使用者下次來時需要重新點選帳號，達到登出效果
      window.google.accounts.id.disableAutoSelect();

      //  revoke (徹底斷開連結)，您必須在 user 物件中多存一個 email
      // window.google.accounts.id.revoke(user.value.google.email, ...)
    }

    // 清除本地狀態
    clearUser();
  };

const logoutFacebook=()=>{
// 如果目前有 FB ID 且 FB SDK 存在
    if (user.value.facebook.id && window.FB) {
      // FB.logout 會清除 Facebook 的 Access Token
      window.FB.logout((response) => {
   
        console.log("Facebook 登出完成", response);
      });
    }
      // 清除本地狀態
    clearUser();
}

  return {
    user,
    isAuthenticated,
    setUser,
    clearUser,
    logoutGoogle,
    logoutFacebook
  };
});
