import axios from "axios";

// Create an Axios instance with global configuration
const baseURL = import.meta.env.DEV ? "/" : "https://wakatime.com";

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      api_key: import.meta.env.WAKATIME_API_KEY,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error in response: ", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
