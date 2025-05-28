import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../services/storeAuth";

const RequireAuth = () => {
    const currentUser = useAuthStore((state) => state.currentUser)

    return currentUser ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default RequireAuth;
