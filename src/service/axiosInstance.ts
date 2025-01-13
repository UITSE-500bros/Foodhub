import axios from "axios";
import { API_URL } from "@env";
import { clearTokens, getTokens, storeTokens } from "./tokenEncrypted";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const tokens = await getTokens();
    if (tokens && tokens.access_token) {
      config.headers.Authorization = `Bearer ${tokens.access_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const tokens = await getTokens();
      if (tokens && tokens.refresh_token) {
        try {
          // Attempt to refresh the token
          const response = await axiosInstance.post("user/refreshToken", {
            refresh_token: tokens.refresh_token,
          });
          console.log("Refreshed token:", response.data);

          const { access_token, refresh_token } = response.data;
          await storeTokens(access_token, refresh_token);

          // Update the Authorization header and retry the request
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // Handle refresh failure (e.g., log out the user)
          await clearTokens();
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
