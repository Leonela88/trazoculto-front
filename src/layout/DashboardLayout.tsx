import { Outlet, Navigate } from "react-router";

const DashboardLayout: React.FC = () => {
    const token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to="/sesion" replace />;
    }

    return (
        <>
         <Outlet />
        </>
    );
};

export default DashboardLayout;
