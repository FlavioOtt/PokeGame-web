import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import "./index.css";

import Root from "./routes/root";
import Register from "./routes/register";
import Login from "./routes/login"
import User from "./routes/user"

import ErrorPage from "./error-page";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />
    },
    {
        path: "/user",
        element: <User />,
        errorElement: <ErrorPage />
    },
    {
            
        path: "/user/login",
        element: <Login />,
        errorElement: <ErrorPage />
        
    },
    {
        path: "/user/register",
        element: <Register />,
        errorElement: <ErrorPage />
    },
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);