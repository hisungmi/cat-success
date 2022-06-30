// const instance = axios.create({
//     baseURL: process.env.VUE_APP_API_URL,
//   });
  
//   function registerUser(userData) {
//     return instance.post('signup', userData);
//   }
//   export { registerUser };

import axios from 'axios';
 
const instance = axios.create({
  baseURL: 'http://3.37.9.131:4000/User2/',
});

function registerUser(userData) {
  // 요청할 URL
  
  const url = 'http://3.37.9.131:4000/User2/Register';
  return axios.post(url, userData);
}
// 로그인 함수
function loginUser(userData) {
  
  const url = 'http://3.37.9.131:4000/User2/Login';
  return axios.post(url, userData);
}
 
export { loginUser, registerUser };