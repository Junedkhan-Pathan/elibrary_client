import conf from "@/conf/conf";
import useTokenStroe from "@/store";
import axios from "axios";

const api = axios.create({
  baseURL: conf.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = useTokenStroe.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


//Users apis
export const login = (data: { username: string; password: string }) =>
  api.post("/api/v1/users/login", data).then((res)=>res.data);

export const register = (data: {
  username: string;
  email: string;
  password: string;
}) => api.post("/api/v1/users/register", data);



//Books Apis

export const addBook = (data: FormData) =>
  api.post("/api/v1/books/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const updateBook = (data: FormData) =>
  api.patch("/api/v1/books/:id", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getBooks = () => api.get("/api/v1/books");
