import axiosClient from "./axiosClient";

const authenticationApi = {
  getUserInfo: () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`;
    return axiosClient.get(url);
  },
  loginAction: (param) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/login`;
    return axiosClient.post(url, param);
  },
};

export default authenticationApi;
