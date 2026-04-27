import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://apis.codante.io/olympic-games",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
