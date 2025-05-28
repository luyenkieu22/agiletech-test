import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const raw = localStorage.getItem("tokenAccess");
    let token: string | null = null;
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        token = parsed?.state?.currentUser ?? null;
      } catch (e) {
        console.error("Invalid tokenAccess format", e);
      }
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
