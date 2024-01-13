import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "../routes/Index";
import Error from "../routes/Error";
import { useAuth } from "../hooks/useAuth";
import About from "../routes/About";
import Unauthorized from "../routes/Unauthorized";
import MainLayout from "../layout/MainLayout";
import Feed from "../routes/Feed";
import AddBook from "../routes/AddBook";
import Library from "../routes/Library";
import Wishlist from "../routes/Wishlist";


export default function Routes() {

    const auth = useAuth()

    const routes = createBrowserRouter([

        { path : '/',     element : <Index />, errorElement : <Error /> },
        { path : '/about', element : <About /> },
        { path : '/feed', element : <Feed /> },

        { path : '/dashboard',     element : auth?.user ? <MainLayout>Dashboard</MainLayout>     : <Unauthorized /> },
        { path : '/library',       element : auth?.user ? <Library />      : <Unauthorized /> },
        { path : '/wishlist',      element : auth?.user ? <Wishlist />     : <Unauthorized /> },
        { path : '/addbook',       element : auth?.user ? <AddBook />      : <Unauthorized /> },
        { path : '/notifications', element : auth?.user ? <MainLayout>Notifications</MainLayout> : <Unauthorized /> },
        { path : '/settings',      element : auth?.user ? <MainLayout>Settings</MainLayout>      : <Unauthorized /> },
    ])
    return <RouterProvider router={routes} />
}
