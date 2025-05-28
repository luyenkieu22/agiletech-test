import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"

const ProfilePage = () => {

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4">
                <Outlet />
            </main>
        </div>
    )
}

export default ProfilePage