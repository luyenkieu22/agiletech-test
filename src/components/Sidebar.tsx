
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-[#D9D9D9] text-gray-900 p-4">
            <Link to="/profile" className="text-2xl font-bold text-center">
                <img className="mx-auto my-4 cursor-pointer" src="/images/logo.png" alt="" />
            </Link>
            <nav className="flex flex-col gap-2 mt-8">
                <Link to="/profile/" className="hover:underline">List Posts</Link>
                <Link to="/" className="hover:underline">Back to home</Link>
            </nav>
        </aside>
    );
}
