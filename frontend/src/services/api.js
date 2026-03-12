import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const sendMessage = (data) => API.post("/messages", data);
export const getServices = () => API.get("/services");
export const getPortfolio = () => API.get("/portfolio");