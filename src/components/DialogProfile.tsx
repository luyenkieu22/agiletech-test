import { useState } from "react";
import { createPost, editPost } from "../services/postsApi";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { IPostData } from "../interfaces/post.interface";


interface DialogProfileProps {
    tagsList: string[];
    handleClose: () => void;
    selectedData: IPostData | [];
}

const DialogProfile = ({
    tagsList,
    handleClose,
    selectedData,
}: DialogProfileProps) => {
    const queryClient = useQueryClient();
    const [postData, setPostData] = useState<IPostData>({
        title: Array.isArray(selectedData) ? "" : selectedData.title || "",
        description: Array.isArray(selectedData) ? "" : selectedData.description || "",
        tags: Array.isArray(selectedData) ? ["Html"] : selectedData.tags || ["Html"],
    })

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target;
        if (name === "tags") {
            setPostData({ ...postData, tags: [value] });
        } else {
            setPostData({ ...postData, [name]: value });
        }
    };

    const { mutate } = useMutation({
        mutationFn: async (data: typeof postData) => {
            if (!Array.isArray(selectedData) && selectedData.id) {
                return editPost(data)
            } else {
                return createPost(data)
            }
        },
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            toast.success(
                variables.id
                    ? "Post updated successfully!"
                    : "Post created successfully!"
            );
            handleClose();
        }
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate(postData);
    }

    return (
        <div className="fixed inset-0 backdrop-blur-[6px] bg-white/30 bg-opacity-30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-[680px] h-auto">
                <h2 className="text-2xl font-semibold">{!Array.isArray(selectedData) && selectedData.id ? "Update post" : "Add new post"}</h2>
                <hr className="mb-6 mt-2 text-gray-300" />
                <form className="w-full mx-auto flex flex-col gap-4 mb-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={postData.title}
                        onChange={handleChangeValue}
                        className="w-3/5 mx-auto border px-4 py-2 rounded outline-none"
                        placeholder="Enter title"
                        required
                    />
                    <input
                        type="text"
                        name="description"
                        value={postData.description}
                        onChange={handleChangeValue}
                        className="w-3/5 mx-auto border px-4 py-2 rounded outline-none"
                        placeholder="Enter description"
                        required
                    />
                    <select
                        className="w-3/5 mx-auto border px-4 py-2 rounded outline-none"
                        value={postData.tags}
                        name="tags"
                        onChange={handleChangeValue}
                    >
                        {tagsList?.map((tag, index) => (
                            <option value={tag} key={index + 1}>{tag}</option>
                        ))}
                    </select>
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={handleClose}
                            className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-primary text-white cursor-pointer px-4 py-1 rounded-md hover:bg-primary-hover"
                            type="submit"
                        >
                            {!Array.isArray(selectedData) && selectedData.id ? "Update" : "Add"}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default DialogProfile;
