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
      if (tokens && tokens.accessToken) {
        config.headers.Authorization = `Bearer ${tokens.accessToken}`;
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
        if (tokens && tokens.refreshToken) {
          try {
            // Attempt to refresh the token
            const response = await axios.post('https://your-api-base-url.com/auth/refresh', {
              refreshToken: tokens.refreshToken,
            });
  
            const { accessToken, refreshToken } = response.data;
            await storeTokens(accessToken, refreshToken);
  
            // Update the Authorization header and retry the request
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
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