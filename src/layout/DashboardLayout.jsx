import { Outlet, Link, useNavigate } from "react-router";
// import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        //lógica para limpiar el Context
        console.log("Sesión cerrada");


        navigate("/", { replace: true });

    };

    return (
        <div >
            <aside >
                <nav>
                    <Link to="/dashboard">Panel Principal</Link>
                    <Link to="/dashboard/projects">Proyectos</Link>
                    <hr />
                    <Link to="/">Ver Web Pública</Link>
                    <button onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                </nav>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;