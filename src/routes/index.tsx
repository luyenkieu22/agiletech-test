import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import ListPosts from "../pages/ListPosts";
import RequireAuth from "../pages/RequireAuth";
import GalleriesPage from "../pages/GalleriesPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/signin",
        element: <UserPage />,
    },
    {
        element: <RequireAuth />,
        children: [
            {
                path: "/profile",
                element: <ProfilePage />,
                children: [
                    {
                        path: "",
                        element: <ListPosts />,
                    },
                    {
                        path: "posts",
                        element: <GalleriesPage />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);
