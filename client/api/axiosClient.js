import axios from "axios";
import {
  ACCESS_TOKEN_NAME,
  BASE_API_URL,
  getCookie,
} from "../constants/apiConstants";

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "content-type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = getCookie(ACCESS_TOKEN_NAME) || null;

  let Authorization = "";
  if (token !== "undefined" && token !== undefined && token) {
    Authorization = `Bearer ${token}`;
  }

  return {
    ...config,
    params: {
      ...config.params,
    },
    headers: {
      ...config.headers,
      ...(Authorization && { authorization: Authorization }),
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default axiosClient;
