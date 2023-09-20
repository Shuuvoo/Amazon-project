import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const myCreateRoute = createBrowserRouter([
  {
    path:'/',
    element:<div>This is my first router</div>,
  },
  {
    path:'/products',
    element:<div>This is my product router</div>,
  }
])




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreateRoute}></RouterProvider>
  </React.StrictMode>
);
