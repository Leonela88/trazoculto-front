import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});


api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
         
          if (!window.location.pathname.includes("/sesion")) {
              alert("Expired session or not authorized.");
              localStorage.removeItem("token");
              window.location.href = "/sesion"; 
          }
          break;
        case 404:
          console.error("n0t founded (404)");
          break;
        default:
          console.error("Server error:", error.response.status);
      }
    }
    return Promise.reject(error);
  }
);

export default api;