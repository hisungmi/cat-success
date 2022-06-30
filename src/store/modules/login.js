// import axios from 'axios';

// const loginStore = {
//     namespaced: true,
//     state: {
//         id: '',
//         accessToken: ''

//     },
//     getters: {
//         //로그인 여부를 가져옴
//         isLogin(state) {
//             return state.accessToken == '' ? false : true;
//         }

//     },
//     mutations: {
//         //id 설정
//         setId(state, id) {
//             state.id = id;
//         },
//         //accessToken 설정
//         setAccesToken(state, accessToken) {
//             state.accessToken = accessToken;
//         },
//         //초기화 설정
//         reset(state) {
//             state.id = '';
//             state.accessToken = '';
//         }

//     },
//     actions: {
//         //로그인합니다.
//         async login( { commit }, Info) {
//             let result = false;
//             let resultErr = null;
//             try {
//                 let res = await axios.post("", Info);
//                 if (res.data.success == true) {
//                     console.log("로그인되었습니다.");
//                     commit('setId',Info.id);
//                     commit('setAccessToken',res.data.accessToken);
//                     result = true;
//                 } else {
//                     console.log("로그인 실패했습니다.");
//                     let err = new Error("Request failed with status code 401");
//                     err.response = { data : {"success":false, "errormessage": "로그인 실패했습니다."}};
//                     resultErr = err;
//                 }
//             } catch(err) {
//                 console.log(err);
//                 if (!err.response) {
//                     err.response = {data: {"success": false, "errormessage":err.message}};
//                 }
//                 resultErr= err;
//             }
//             return new Promise((resolve, reject) => {
//                 if (result) {
//                     resolve();
//                 } else {
//                     reject(resultErr);
//                 }
//             });
//         },
//         doLogout({commit}) {
//             commit('reset');
//         }

//     }
// };
// export default loginStore;