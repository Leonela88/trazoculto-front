import { useEffect, useState } from "react";
import api from "../service/api";
import Title from "../components/atoms/Title";
import LinkButton from "../components/atoms/LinkButton";
import styles from "./dashboard.module.css"
import Card from "../components/atoms/Card";
import projectService from "../service/apiProject";
import Favicon from "../assets/favicon.png"
import Logout from "../assets/logout.png"
import { useNavigate } from "react-router";
import Filter from "../assets/filter.png"
import Delete from "../assets/delete.png"
import Edit from "../assets/edit.png"

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/sesion");
  };

  const goToHome = () => navigate("/");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await projectService.getAll();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects", error);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.topHeader}>
        <Title color="dark">Dashboard</Title>
        <div className={styles.iconsRight}>
          <img
            src={Favicon}
            alt="logo"
            className={styles.logoImg}
            onClick={goToHome}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={Logout}
            alt="logout"
            className={styles.logoutImg}
            onClick={handleLogout}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      <div className={styles.sectionHeader}>
        <img
          src={Filter}
          alt="filter"
          className={styles.filterIcon}
          onClick={""}
          style={{ cursor: 'pointer' }}
        />
        <Title color="dark">Mis Proyectos</Title>
      </div>

      <div className={styles.labels}>
        <span>Cliente</span>
        <span>Proyecto</span>
        <span>Estado</span>
      </div>

      <div className={styles.projectList}>

        {projects.map((project) => (

          <Card key={project.id} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <span>{project.clientName}</span>
              <span>{project.projectTitle}</span>
              <span >{project.state}</span>
            </div>
            <div className={styles.actions}>
              <img
                src={Edit}
                alt="EditIcon"
                onClick={""}
                style={{ cursor: 'pointer' }}
              />
              <img
                src={Delete}
                alt="Delete"
                onClick={""}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </Card>

        ))}
      </div>

      <div className={styles.footerAction}>
        <LinkButton to="/dashboard/projects">+ Añadir</LinkButton>
      </div>
    </div>
  );

};

export default Dashboard;