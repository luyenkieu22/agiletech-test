import { useQuery } from "@tanstack/react-query";
import { getGalleries } from "../services/galleriesApi";
import { Loader } from "lucide-react";

interface IGalleries {
    id?: string,
    desctiption: string,
    imageUrl: string,
}

const GalleriesPage = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["galleries"],
        queryFn: () => getGalleries(),
    });

    if (isError) return <div>An error occurred while loading the page!</div>;

    const galleriesData = data?.data as IGalleries[] | undefined;

    return (
        <section className="p-4 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleriesData?.map((gallery: IGalleries) => (
                    <div
                        key={gallery?.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            className="w-full h-48 object-cover"
                            src="https://th.bing.com/th/id/OIP.HASjebVlB5LCeM4c9GVQAQHaHa?w=213&h=214&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                            alt={gallery?.desctiption || "Gallery Image"}
                        />
                        <div className="p-4 text-center">
                            <p className="text-gray-700 text-sm">{gallery?.desctiption}</p>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="col-span-full flex justify-center items-center">
                        <Loader size={30} className="fixed top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
                    </div>
                )}
            </div>
        </section>

    )
}

export default GalleriesPage