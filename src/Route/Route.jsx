import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products";
import Single from "../Pages/Home/Single";

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
                element : <div> Dashboard</div>
            }
        ]
    }
])

export default myCreateRoute;