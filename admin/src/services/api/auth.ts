import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api", // URL backend
  withCredentials: true, // Gửi cookies (nếu cần)
});

// Interceptor để tự động xử lý lỗi
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Xử lý trường hợp hết hạn đăng nhập
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
