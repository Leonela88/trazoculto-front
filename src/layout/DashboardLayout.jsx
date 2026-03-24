import { Outlet, Link, useNavigate, Navigate } from "react-router";

const DashboardLayout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token")

    if (!token) {
        return <Navigate to="/sesion" replace />;
    }

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        navigate("/", { replace: true });

    };

    return (
        <>
         <Outlet />
        </>

    );
};

export default DashboardLayout;