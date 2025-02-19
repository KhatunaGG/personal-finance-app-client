import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://personal-finance-app-server-khu2.onrender.com",
});
