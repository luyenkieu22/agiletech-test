import axiosInstance from "../utils/axiosInstance";

export const signIn = async (username: { username: string }) => {
  return await axiosInstance.post("/auth/login", username);
};
export const refreshToken = async (refreshToken: { refreshToken: string }) => {
  return await axiosInstance.post("/auth/refresh-token", refreshToken);
};
export const logoutUser = async () => {
  return await axiosInstance.delete("/auth/logout");
};
