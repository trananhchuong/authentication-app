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
  signupAction: (param) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/register`;
    return axiosClient.post(url, param);
  },
  logoutAction: (param) => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`;
    return axiosClient.post(url, param);
  },
};

export default authenticationApi;
