const jsSHA = require('jssha');
const axios = require('axios');

function getAuthorizationHeader() {
  const AppID = 'b32523-bc1a72b3-d0f5-4a88';
  const AppKey = '1ef51d3c-7adf-4993-929a-4b2f5cf445cd';
  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
  return { Authorization, 'X-Date': GMTString };
}

const url = 'https://tdx.transportdata.tw/api/basic/v2/Bus/RealTimeNearStop/City/Tainan/%E8%97%8D?%24top=5&%24format=JSON';

(async () => {
  try {
    const headers = getAuthorizationHeader();
    headers.Accept = 'application/json';
    console.log('Request headers:', headers);
    const res = await axios.get(url, { headers, timeout: 10000 });
    console.log('Status:', res.status);
    console.log('Data sample:', Array.isArray(res.data) ? res.data.slice(0,2) : res.data);
  } catch (err) {
    if (err.response) {
      console.error('Response status:', err.response.status);
      console.error('Response data:', err.response.data);
    } else {
      console.error('Error:', err.message);
    }
    process.exit(1);
  }
})();
