import axios from "axios";

const baseURL = "http://localhost:5000/api";
const apicall = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// apicall.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   config.headers.Authorization = token ? `Bearer ` + token : "";
//   return config;
// });

export default apicall;
