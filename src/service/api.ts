import axios, { InternalAxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      const serverMessage = error.response.data?.message || "An error occurred";

      switch (error.response.status) {
        case 401:
          if (!window.location.pathname.includes("/sesion")) {
            alert("Expired session or not authorized.");
            localStorage.removeItem("token");
            window.location.href = "/sesion";
          }
          break;

        case 400:
          alert(serverMessage);
          break;

        case 404:
          console.error("Resource not found (404)");
          break;

        case 500:
          alert("Internal Server Error: " + serverMessage);
          break;

        default:
          console.error("Server error:", error.response.status, serverMessage);
      }
    } else if (error.request) {
      alert("No response from server. Please check your connection.");
    }

    return Promise.reject(error);
  }
);

export default api;
