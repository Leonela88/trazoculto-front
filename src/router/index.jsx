import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Project from "../pages/Project";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/services",
                Component: Services
            },
            {
                path: "/contact",
                Component: Contact
            },
            {
                path: "/sesion",
                Component: Login
            }

        ]
    },
    {
        path: "/dashboard",
        Component: DashboardLayout,
        children: [
            {
                index: true,
                Component: Dashboard
            },
            {
                path: "projects",
                Component: Project
            }
        ]
    }
]);