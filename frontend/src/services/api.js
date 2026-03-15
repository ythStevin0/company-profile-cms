import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Auth header otomatis kalau ada token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const loginAdmin    = (data) => API.post("/auth/login", data);
export const sendMessage   = (data) => API.post("/messages", data);
export const getServices   = ()     => API.get("/services");
export const getPortfolio  = ()     => API.get("/portfolio");
export const getMessages   = ()     => API.get("/messages");
export const deleteMessage = (id)   => API.delete(`/messages/${id}`);
export const createService = (data) => API.post("/services", data);
export const updateService = (id, data) => API.put(`/services/${id}`, data);
export const deleteService = (id)   => API.delete(`/services/${id}`);
export const createPortfolio = (data) => API.post("/portfolio", data);
export const updatePortfolio = (id, data) => API.put(`/portfolio/${id}`, data);
export const deletePortfolio = (id)   => API.delete(`/portfolio/${id}`);