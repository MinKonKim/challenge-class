import axios from "axios";
export const BASE_URL = "https://api.ballang.yoojinyoung.com";
export const client = axios.create({
  baseURL: BASE_URL,
  // headers:{Authorization: "Bear token~"}
});

// const updateToken=(token)=>{
//   client.defaults.headers.common.Authorization = token ? `Bearer ${token}`: "";
// }
