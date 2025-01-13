import axios from "axios";
import { API_URL } from "@env";
import { clearTokens, getTokens, storeTokens } from "./tokenEncrypted";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InQydldmSVdOYnpKMnpiT2wiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3duY3F2ZGN2YnZwcG5pYnV1aXl0LnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJhYjY4ZTliNi03YzA1LTRmOGMtODNkMS1kOWE2MjM5NTBiNTgiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzM2NzgzODM2LCJpYXQiOjE3MzY3ODAyMzYsImVtYWlsIjoicG5hbTMwNzIwMDRAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJnb29nbGUiLCJwcm92aWRlcnMiOlsiZ29vZ2xlIl19LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLVklmWTBKeFhQRGFueG1UdW1RdUpfSzN6MFhQUTRGUzlIOEZJOFFiSDRhSzBta2t3Zj1zOTYtYyIsImVtYWlsIjoicG5hbTMwNzIwMDRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IlBoxrDGoW5nIE5hbSDEkG_DoG4iLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYW1lIjoiUGjGsMahbmcgTmFtIMSQb8OgbiIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tWSWZZMEp4WFBEYW54bVR1bVF1Sl9LM3owWFBRNEZTOUg4Rkk4UWJINGFLMG1ra3dmPXM5Ni1jIiwicHJvdmlkZXJfaWQiOiIxMTY1ODAwMjQ5MTk3NjU3NzgwMTEiLCJzdWIiOiIxMTY1ODAwMjQ5MTk3NjU3NzgwMTEifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvYXV0aCIsInRpbWVzdGFtcCI6MTczNjc3OTU4M31dLCJzZXNzaW9uX2lkIjoiNmIxYWNhMmYtMGEwZi00ZjdjLThhYjctOWVjMDNiMWJkZmViIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.1jx4c4x7e6ovuKkg161VCj6MlqeRDxDAb5S7VQe1jjE`,
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
