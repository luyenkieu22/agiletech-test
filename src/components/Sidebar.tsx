import { Images, LogOut, UserPen } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [focus, setFocus] = useState<string>("profile");
    return (
        <aside className="w-64 bg-[#0c1a31] text-white p-3">
            <Link
                to="/profile"
                className="text-2xl font-bold text-center"
            >
                <img
                    className="mx-auto my-4 cursor-pointer"
                    src="/images/logo.png"
                    alt=""
                />
            </Link>
            <nav className="flex flex-col gap-4 mt-14">
                <Link
                    to="/profile/"
                    className={`flex items-center gap-2 hover:shadow-xl transition-all ${focus === "profile" && "bg-blue-600"} hover:bg-blue-600 px-4 py-2 rounded-full`}
                    onClick={() => setFocus("profile")}
                >
                    <UserPen /> Profiles
                </Link>
                <Link
                    to="/profile/posts"
                    className={`flex items-center gap-2 hover:shadow-xl transition-all ${focus === "posts" && "bg-blue-600"} hover:bg-blue-600 px-4 py-2 rounded-full`}
                    onClick={() => setFocus("posts")}
                >
                    <Images /> Posts
                </Link>
                <Link
                    to="/"
                    className="flex items-center gap-2 hover:shadow-xl transition-all hover:bg-blue-600 px-4 py-2 rounded-full"
                >
                    <LogOut /> Logout
                </Link>
            </nav>
        </aside>
    );
}
