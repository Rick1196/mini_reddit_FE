import customAxios from "../axios";

export const sessionAPI = {
  login: (token, email) =>
    customAxios.post("/authentication/login", {
      email,
      token,
    }),
  logout: () => customAxios.post("/authentication/logout"),
};
