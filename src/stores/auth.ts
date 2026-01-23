import { defineStore } from "pinia";
import { ref } from "vue";
import liff from "@line/liff";

export const useAuthStore = defineStore(
  "auth",
  () => {
    type DefaultUser = {
      id: string | null;
      name: string | null;
      picture: string | null;
    };
    type UserInfo = {
      google: DefaultUser;
      facebook: DefaultUser;
      line: DefaultUser;
    };
   
    const user = ref<UserInfo>({
      google: { id: null, name: null, picture: null },
      facebook: { id: null, name: null, picture: null },
      line: { id: null, name: null, picture: null },
    });

    const isAuthenticated = ref(false);

   
    const setUser = (userInfo:UserInfo) => {
      // 確保欄位結構完整
      user.value = {
        google: userInfo.google || { id: null, name: null, picture: null },
        facebook: userInfo.facebook || { id: null, name: null, picture: null },
        line: userInfo.line || { id: null, name: null, picture: null },
      };

      isAuthenticated.value = !!(
        user.value.google.id ||
        user.value.facebook.id ||
        user.value.line.id
      );
    };

    const clearUser = () => {
      user.value = {
        google: { id: null, name: null, picture: null },
        facebook: { id: null, name: null, picture: null },
        line: { id: null, name: null, picture: null },
      };
      isAuthenticated.value = false;
      // 套件會自動清除 localStorage
    };

    const logoutGoogle = () => {
      if (user.value.google.id && window.google) {
        window.google.accounts.id.disableAutoSelect();
      }
      clearUser();
    };

    const logoutFacebook = () => {
      if (user.value.facebook.id && window.FB) {
        window.FB.logout(() => {});
      }
      clearUser();
    };

    const logoutLine = () => {
      if (liff.isInClient()) {
        // LINE App 內不處理
      } else if (liff.isLoggedIn()) {
        liff.logout();
      }
      clearUser();
    };

    return {
      user,
      isAuthenticated,
      setUser,
      clearUser,
      logoutGoogle,
      logoutFacebook,
      logoutLine,
    };
  },
  {

    persist: true,
   
  }
);
