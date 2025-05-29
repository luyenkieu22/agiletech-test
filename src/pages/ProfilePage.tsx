import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"

const ProfilePage = () => {

    return (
        <div className="fixed flex min-h-[100vh] w-full">
            <Sidebar />
            <main className="flex-1 flex">
                <Outlet />
            </main>
        </div>
    )
}

export default ProfilePage