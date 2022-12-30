import axiosClient from "./axiosClient";

const authenticationApi = {
  getUserInfo: () => {
    const url = "/api/user";
    return axiosClient.get(url);
  },
  loginAction: (param) => {
    const url = "/api/login";
    return axiosClient.post(url, param);
  },
  signupAction: (param) => {
    const url = "/api/register";
    return axiosClient.post(url, param);
  },
  logoutAction: (param) => {
    const url = "/api/logout";
    return axiosClient.post(url, param);
  },
};

export default authenticationApi;
