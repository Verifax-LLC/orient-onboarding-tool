// src/apiClient.ts
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ONBOARDING_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default apiClient;
