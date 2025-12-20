
import axios from 'axios';

// 填入你的 ID 與 Secret
const CLIENT_ID = 'b32523-bc1a72b3-d0f5-4a88';
const CLIENT_SECRET = '4dbbb8cc-c0dd-4013-beda-b48eae6287bf';
const AUTH_URL = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';

// 變數用來快取 Token，避免每次 API 都重新申請
let cachedToken = null;
let tokenExpiration = 0; // Token 到期時間

// 取得有效 Token 的函式
async function getValidToken() {
  const now = Date.now();
  
  // 如果目前有 Token 且還沒過期 (預留 60 秒緩衝)，直接回傳舊的
  if (cachedToken && now < tokenExpiration - 60000) {
    return cachedToken;
  }

  // 否則，重新申請 Token
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);

  try {
    const res = await axios.post(AUTH_URL, params, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    });
    
    cachedToken = res.data.access_token;
    // expires_in 通常是秒，轉成毫秒並加上當前時間
    tokenExpiration = now + (res.data.expires_in * 1000); 
    
    return cachedToken;
  } catch (error) {
    console.error('取得 TDX Token 失敗', error);
    throw error;
  }
}

// 建立一個專用的 Axios 實體
const tdxRequest = axios.create({
  baseURL: 'https://tdx.transportdata.tw/api/basic/v3', // 設定基礎網址
});

// **關鍵魔法：請求攔截器**
// 在每次發送請求「前」，自動把 Token 塞進去
tdxRequest.interceptors.request.use(
  async (config) => {
    try {
      const token = await getValidToken();
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 匯出這個設定好的 axios 實體
export default tdxRequest;