import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPosts, getTags } from "../services/postsApi";
import type {
    IAllPosts,
    IPostData,
    IPosts,
} from "../interfaces/post.interface";
import {
    Edit2,
    Loader,
    SquareChevronLeft,
    SquareChevronRight,
    Trash2,
} from "lucide-react";
import DialogProfile from "../components/DialogProfile";
import { toast } from "react-toastify";

const ListPosts: React.FC = () => {
    const [page, setPage] = useState(1);
    const [titleFilter, setTitleFilter] = useState<string>("");
    const [tagsFilter, setTagsFilter] = useState<string>("Html");
    const [tagsList, setTagsList] = useState<[string]>([""]);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [selectedData, setSelectedData] = useState<IPostData | []>([]);
    const queryClient = useQueryClient();

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts", page, tagsFilter, titleFilter],
        queryFn: () => getPosts({ page, title: titleFilter, tags: tagsFilter }),
    });

    const { mutate } = useMutation({
        mutationFn: async (id: string) => deletePost(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            toast.success("Post delete successfully!");
            handleClose();
        },
    });

    useEffect(() => {
        (async () => {
            const response = await getTags();
            setTagsList(response.data);
        })();
    }, []);

    const handleOpenDialog = (data: IPostData) => {
        setOpenDialog(true);
        setSelectedData(data);
    };
    const handleClose = () => {
        setOpenDialog(false);
        setSelectedData([]);
    };

    const handleRemove = (id: string) => {
        const confirm = window.confirm("Do you want to delete this post?");
        if (!confirm) return;
        mutate(id);
    };

    if (isError) return <div>Lỗi: {(error as Error).message}</div>;

    const postsData = data?.data as IAllPosts | undefined;

    const posts = Array.isArray(postsData?.posts) ? postsData?.posts : [];

    return (
        <div className="w-full p-24">
            <div className="w-full lg:flex grid gap-4 mb-8 justify-between flex-wrap">
                <button
                    className="px-8 lg:px-16 py-3 rounded-full bg-primary hover:bg-primary-hover text-white transition-all cursor-pointer"
                    onClick={() => setOpenDialog(true)}
                >
                    Add new
                </button>
                <div className="lg:flex grid gap-6 items-center sm:w-full xl:w-auto">
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        className="w-full xl:w-[360px] h-10 lg:h-[48px] border px-3 py-1 rounded-md"
                        value={titleFilter}
                        onChange={(e) => setTitleFilter(e.target.value)}
                    />
                    <select
                        className="w-full xl:w-[360px] h-10 lg:h-[48px] border px-3 py-1 rounded-md cursor-pointer"
                        value={tagsFilter}
                        onChange={(e) => setTagsFilter(e.target.value)}
                    >
                        {tagsList?.map((tag, index) => (
                            <option value={tag} key={index} className="cursor-pointer">
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Bảng dữ liệu */}
            <table className="min-w-full text-sm shadow-md rounded-xl">
                <thead>
                    <tr className="bg-gray-100 text-center">
                        <th className="p-3 border-b border-gray-300">ID</th>
                        <th className="p-3 border-b border-gray-300">Title</th>
                        <th className="p-3 border-b border-gray-300">Description</th>
                        <th className="p-3 border-b border-gray-300">Tags</th>
                        <th className="p-3 border-b border-gray-300">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 ? (
                        posts?.map((post: IPosts, index: number) => (
                            <tr key={post.id} className="text-center hover:bg-gray-100">
                                <td className="p-3 border-t border-gray-300">{index + 1}</td>
                                <td className="p-3 border-t border-gray-300">{post?.title}</td>
                                <td className="p-3 border-t border-gray-300">
                                    {post?.description}
                                </td>
                                <td className="p-3 border-t border-gray-300">
                                    {post?.tags.join(", ")}
                                </td>
                                <td className="p-3 border-t border-gray-300">
                                    <div className="flex items-center justify-center gap-3">
                                        <Edit2
                                            className="cursor-pointer text-gray-500 hover:text-gray-900"
                                            size={22}
                                            onClick={() => handleOpenDialog(post)}
                                        />
                                        <Trash2
                                            className="cursor-pointer text-gray-500 hover:text-gray-900"
                                            size={22}
                                            onClick={() => handleRemove(post.id!)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <td colSpan={5} className="text-center p-2">
                            No data!
                        </td>
                    )}
                    {isLoading && (
                        <Loader size={30} className="fixed top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
                    )}
                </tbody>
            </table>

            {/* Phân trang */}
            <div className="flex justify-end items-center mt-4 gap-4">
                <div className="flex items-center gap-2 pointer-events-none">
                    <p className="text-gray-500">The page you're on</p>
                    <p className="border-gray-300 text-gray-500 border px-2 rounded-xl font-[600]">
                        {postsData?.current_page ? postsData?.current_page : 0}/
                        {postsData?.total_page ? postsData?.total_page : 0}
                    </p>
                </div>
                <button
                    onClick={() =>
                        setPage((prev) =>
                            prev - 1 < 1 ? postsData?.total_page ?? 1 : prev - 1
                        )
                    }
                >
                    <SquareChevronLeft
                        className="cursor-pointer shadow-lg text-gray-500 hover:text-gray-800"
                        size={28}
                    />
                </button>
                <button
                    onClick={() =>
                        setPage((prev) =>
                            prev + 1 > (postsData?.total_page ?? 1) ? 1 : prev + 1
                        )
                    }
                >
                    <SquareChevronRight
                        className="cursor-pointer shadow-lg text-gray-500 hover:text-gray-800"
                        size={28}
                    />
                </button>
            </div>
            {openDialog && (
                <DialogProfile
                    tagsList={tagsList}
                    selectedData={selectedData}
                    handleClose={handleClose}
                />
            )}
        </div>
    );
};

export default ListPosts;
