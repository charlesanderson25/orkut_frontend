import axios from "axios";
import { TokenStorage } from "./tokenStorage";

export const api = axios.create({
  baseURL: "http://localhost:8080/",
});

api.interceptors.request.use((config) => {
  const token = TokenStorage.getToken;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
