import { useState } from "react";
import useAuthStore from "../services/storeAuth";
import { useNavigate } from "react-router";
import { signIn } from "../services/authApi";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";

interface SignInParams {
    username: string;
}

interface SignInResponse {
    data: {
        accessToken: string;
        code: number;
    };
}
const UserPage = () => {
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const setCurrentUser = useAuthStore((state) => state.setCurrentUser)
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res: SignInResponse = await signIn({ username: user } as SignInParams);
            if (res.data.code === 401) {
                setIsLoading(false);
                toast.error("Login failed, please try again.");
                return;
            } else {
                setCurrentUser(res.data.accessToken);
                setIsLoading(false);
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mx-auto p-14 w-full h-[80vh]">
            <header className="flex justify-between md:flex-1 items-center gap-8">
                <img className="cursor-pointer" src="/images/logo.png" alt="" onClick={() => navigate("/")} />
            </header>
            <div className="w-full lg:w-[550px] mx-auto h-full flex flex-col justify-center items-center">
                <h1 className="text-5xl pb-14 text-center">Sign In</h1>
                <form onSubmit={handleSubmit} className="w-full ">
                    <div className="w-3/5 mx-auto  flex flex-col gap-2">
                        <label htmlFor="name">Username</label>
                        <input
                            className="border rounded-sm w-full p-2.5 focus:outline-none"
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={user}
                            onChange={e => setUser(e.target.value)}
                        />
                    </div>
                    <button type="submit" disabled={isLoading} className="w-3/5 flex justify-center mt-8 text-white py-3 rounded-full mx-auto bg-primary hover:bg-primary-hover cursor-pointer">
                        {isLoading ? <Loader className="animate-spin" /> : "Login"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserPage