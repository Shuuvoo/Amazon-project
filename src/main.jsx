import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products";
import myCreateRoute from "./Route/Route";

// const myCreateRoute = createBrowserRouter([
//   {
//     path:'/',
//     element:<MainLayout></MainLayout>,
//     children:[
//       {
//         path:'/',
//         element:<Home></Home>,
//       },
//       {
//         path:'/products',
//         element:<Products></Products>
//       }
//     ]
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>
);
