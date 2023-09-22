import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products";
import Single from "../Pages/Home/Single";
import DashboardLayout from "../assets/DashBoardLayout/DashboardLayout";
import DashBoard from "../assets/DashBoardLayout/DashBoard/DashBoard";
import Profile from "../assets/DashBoardLayout/DashBoard/Profile/Profile";
import EditProfile from "../assets/DashBoardLayout/EditProfile/EditProfile";

const myCreateRoute  = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/products',
                element : <Products></Products>,
                loader : () => fetch(`https://dummyjson.com/products`)
            },
            {
                path : '/product/:id',
                element:<Single></Single>,
                loader : (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
            },
            {
                path : '/dashboard',
                element :<DashboardLayout></DashboardLayout>,
                children:[
                    {
                        path:'/dashboard',
                        element:<DashBoard></DashBoard>
                    },
                    {
                        path:'/dashboard/profile',
                        element:<Profile></Profile>,
                    },
                    {
                        path:'/dashboard/editprofile',
                        element: <EditProfile></EditProfile>,
                    }
,
                ]
            }
        ]
    }
])

export default myCreateRoute;