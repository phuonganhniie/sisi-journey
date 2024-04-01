import axios from "axios";

// Create an Wakatime instance with global configuration
const wkBaseURL = "/api/wakatime-proxy";

const wkInstance = axios.create({
  baseURL: wkBaseURL,
});

wkInstance.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      api_key: import.meta.env.VITE_WAKATIME_API_KEY,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

wkInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error in response: ", error);
    return Promise.reject(error);
  }
);

export default wkInstance;
