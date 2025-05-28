import axiosInstance from "../utils/axiosInstance";

export const deletePost = async () => {
  return await axiosInstance.get("/galleries");
};
