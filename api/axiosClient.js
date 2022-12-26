import axios from "axios";
import { BASE_API_URL } from "../constants/apiConstants";
import queryString from 'query-string';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    params: {
      ...config.params,
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
