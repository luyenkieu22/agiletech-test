import { Loader, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../services/storeAuth";
import { logoutUser } from "../services/authApi";
import { toast } from "react-toastify";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const currentUser = useAuthStore((state) => state.currentUser);
    const removeCurrentUser = useAuthStore((state) => state.removeCurrentUser);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await logoutUser();
            removeCurrentUser()
            setIsLoading(false);
            toast.success("Logout successful");
            navigate("/signin");
        } catch (error) {
            console.log(error);
        }
    };

    const handleNavigate = () => {
        if (!currentUser) {
            navigate("/signin")
        } else {
            navigate("/profile")
        }
    }

    return (
        <header
            className="lg:mb-0 z-20 h-[60px] relative px-4 lg:px-0"
            data-aos="fade-down"
            data-aos-delay="1200"
            data-aos-duration="1000"
        >
            <div className="flex justify-between md:flex-1 items-center gap-8">
                <img src="/images/logo.png" alt="" />
                <ul className="hidden lg:flex gap-[2rem] ml-22 text-[#4e606a]">
                    <li className="hover:text-primary text-md">
                        <a href="#about">About</a>
                    </li>
                    <li className="hover:text-primary text-md">
                        <a href="#features">Features</a>
                    </li>
                    <li className="hover:text-primary text-md">
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li className="hover:text-primary text-md">
                        <a href="#help">Help</a>
                    </li>
                </ul>
                <div className="lg:flex-1 flex justify-end items-center gap-4">
                    {currentUser ? (
                        <div className="gap-4 items-center hidden lg:flex">
                            <button className="text-white bg-primary hover:bg-primary-hover px-8 py-3 lg:px-16 lg:py-3 rounded-3xl font-medium cursor-pointer"
                                onClick={handleNavigate}>
                                Profile
                            </button>
                            <button
                                className="text-white bg-primary hover:bg-primary-hover px-8 py-3 lg:px-16 lg:py-3 rounded-3xl font-medium cursor-pointer"
                                onClick={handleLogout}
                            >
                                {isLoading ? <Loader className="animate-spin" /> : "Logout"}
                            </button>
                        </div>
                    ) : (
                        <button
                            className="text-white bg-primary hover:bg-primary-hover px-16 py-3 rounded-3xl font-medium cursor-pointer"
                            onClick={() => navigate("/signin")}
                        >
                            Sign In
                        </button>
                    )}
                </div>
                <Menu
                    className="sm:block lg:hidden cursor-pointer"
                    onClick={() => setMenuOpen((prev) => !prev)}
                />
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="max-h-52 lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all">
                    <ul className="flex flex-col gap-4 p-4">
                        <li className="text-white hover:text-primary">
                            <a href="#about">About</a>
                        </li>
                        <li className="text-white hover:text-primary">
                            <a href="#features">Features</a>
                        </li>
                        <li className="text-white hover:text-primary">
                            <a href="#help">Help</a>
                        </li>

                        {currentUser && (
                            <>
                                <li className="text-white hover:text-primary">
                                    <a href="/profile">Profile</a>
                                </li>
                                <li className="text-white hover:text-primary">
                                    <a href="/" onClick={handleLogout}>
                                        Logout
                                    </a>
                                </li>
                            </>
                        )}
                        <li className="text-white hover:text-primary text-md">
                            <a href="#testimonials">Testimonials</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
