import axios from "axios";

const baseUrl = "http://87.107.2.216:3001/";

export const interceptor = axios.create({
  baseURL: baseUrl,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  if (error.response.status === 401) {
    console.log("response.status === 400");
  }
  if (error.response.status >= 404 && error.response.status < 500) {
    console.log("response.status >= 404 && response.status < 500");
  }

  return Promise.reject(error);
};

interceptor.interceptors.response.use(onSuccess, onError);
interceptor.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = "Bearer " + token;
  }
  return config;
});
