import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, getPosts, getTags } from "../services/postsApi";
import type { IAllPosts, IPosts } from "../interfaces/post.interface";
import { Edit2, Loader, SquareChevronLeft, SquareChevronRight, Trash2 } from "lucide-react";
import DialogProfile from "./DialogProfile";
import { toast } from "react-toastify";

interface IPostData {
    id?: string;
    title: string;
    description: string;
    tags: string[];
}

const ListPosts: React.FC = () => {
    const [page, setPage] = useState(1);
    const [titleFilter, setTitleFilter] = useState<string>("string3");
    const [tagsFilter, setTagsFilter] = useState<string>("Html");
    const [tagsList, setTagsList] = useState<[string]>([""]);
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [selectedData, setSelectedData] = useState<IPostData | []>([]);
    const queryClient = useQueryClient();

    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["posts", page, tagsFilter],
        queryFn: () => getPosts({ page, title: titleFilter, tags: tagsFilter }),
        staleTime: 1000 * 60 * 5,
    });

    const { mutate } = useMutation({
        mutationFn: async (id: string) => deletePost(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            toast.success("Post delete successfully!");
            handleClose();
        }
    });

    useEffect(() => {
        (async () => {
            const response = await getTags();
            setTagsList(response.data)
        })();
    }, []);

    const handleOpenDialog = (data: IPostData) => {
        setOpenDialog(true);
        setSelectedData(data);
    }
    const handleClose = () => {
        setOpenDialog(false);
        setSelectedData([])
    }

    const handleRemove = (id: string) => {
        const confirm = window.confirm("Do you want to delete this post?");
        if (!confirm) return;
        mutate(id);
    }

    if (isError) return <div>Lỗi: {(error as Error).message}</div>;

    const postsData = (data?.data as IAllPosts | undefined);

    const posts = Array.isArray(postsData?.posts) ? postsData?.posts : [];

    return (
        <div className="p-18">
            <div className="lg:flex grid gap-4 mb-4 items-center justify-between">
                <button className="px-20 py-3 rounded-full bg-primary hover:bg-primary-hover text-white transition-all" onClick={() => setOpenDialog(true)}>Add new</button>
                {openDialog && <DialogProfile tagsList={tagsList} selectedData={selectedData} handleClose={handleClose} />}
                <div className="lg:flex grid gap-6 items-center">
                    <input
                        type="text"
                        placeholder="Lọc theo tiêu đề..."
                        className="w-full sm:w-2xs xl:w-[368px] h-10 lg:h-[48px] border px-3 py-1 rounded-md"
                        value={titleFilter}
                        onChange={(e) => setTitleFilter(e.target.value)}
                    />
                    <select
                        className="w-full sm:w-2xs xl:w-[368px] h-10 lg:h-[48px] border px-3 py-1 rounded-md"
                        value={tagsFilter}
                        onChange={(e) => setTagsFilter(e.target.value)}
                    >
                        {tagsList?.map((tag, index) => (
                            <option value={tag} key={index}>{tag}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Bảng dữ liệu */}
            <table className="min-w-full border text-sm">
                <thead>
                    <tr className="bg-gray-100 text-center">
                        <th className="p-2 border">ID</th>
                        <th className="p-2 border">Title</th>
                        <th className="p-2 border">Description</th>
                        <th className="p-2 border">Tags</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length > 0 ? posts?.map((post: IPosts, index: number) => (
                        <tr key={post.id} className="text-center hover:bg-gray-100">
                            <td className="p-2 border ">{index + 1}</td>
                            <td className="p-2 border">{post?.title}</td>
                            <td className="p-2 border">{post?.description}</td>
                            <td className="p-2 border">{post?.tags.join(", ")}</td>
                            <td className="p-2 flex items-center justify-center gap-3">
                                <Edit2 size={22} onClick={() => handleOpenDialog(post)} />
                                <Trash2 size={22} onClick={() => handleRemove(post.id!)} />
                            </td>
                        </tr>
                    )) : <td colSpan={5} className="text-center p-2">No data!</td>}
                    {isLoading && <Loader size={30} className="fixed top-1/2 left-1/2 animate-spin" />}
                </tbody>
            </table>

            {/* Phân trang */}
            <div className="flex justify-end items-center mt-1 gap-4">
                <button onClick={() => setPage((prev) => prev - 1)}>
                    <SquareChevronLeft className="cursor-pointer text-gray-800" size={28} />
                </button>
                <button onClick={() => setPage((prev) => prev + 1)}>
                    <SquareChevronRight className="cursor-pointer text-gray-800" size={28} />
                </button>
            </div>
        </div>
    );
};

export default ListPosts

