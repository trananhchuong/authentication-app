import axiosClient from "./axiosClient";

const authenticationApi = {
  getUserInfo: () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`;
    return axiosClient.get(url);
  },
};

export default authenticationApi;
