import type { IPosts } from "../interfaces/post.interface";
import axiosInstance from "../utils/axiosInstance";

export const getPosts = async ({
  page,
  title,
  tags,
}: {
  page: number;
  title: string;
  tags: string;
}) => {
  return await axiosInstance.get(`/posts`, { params: { page, title, tags } });
};
export const getTags = async () => {
  return await axiosInstance.get("/posts/tags");
};
export const createPost = async (postData: IPosts) => {
  return await axiosInstance.post("/posts", postData);
};
export const editPost = async (postData: IPosts) => {
  return await axiosInstance.patch(`/posts/${postData.id}`, postData);
};
export const deletePost = async (id: string) => {
  return await axiosInstance.delete(`/posts/${id}`);
};
