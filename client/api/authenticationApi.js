import { BASE_API_URL } from "../constants/apiConstants";
import axiosClient from "./axiosClient";

const authenticationApi = {
  getUserInfo: () => {
    const url = `${BASE_API_URL}/api/user`;
    return axiosClient.get(url);
  },
};

export default authenticationApi;
