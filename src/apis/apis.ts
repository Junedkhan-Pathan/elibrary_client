import conf from "@/conf/conf";
import axios from "axios";

const api = axios.create({
  baseURL: conf.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//     const token = useToke
// })