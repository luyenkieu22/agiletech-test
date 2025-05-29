import axiosInstance from "../utils/axiosInstance";

export const getGalleries = async () => {
  return await axiosInstance.get("/galleries");
};
