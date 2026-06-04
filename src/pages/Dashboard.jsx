import { useEffect, useState } from "react";
import api from "../service/api";
import Title from "../components/atoms/Title/Title";
import LinkButton from "../components/atoms/LinkButton/LinkButton";
import styles from "./dashboard.module.css"
import Card from "../components/atoms/Card/Card";
import projectService from "../service/apiProject";
import Favicon from "../assets/favicon.png"
import Logout from "../assets/logout.png"
import { useNavigate } from "react-router";
import Filter from "../assets/filter.png"
import Delete from "../assets/delete.png"
import Edit from "../assets/edit.png"
import close from "../assets/close.png"
import check from "../assets/check.png"

const Dashboard = () => {

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ projectTitle: "", clientName: "", state: "" });
  const [filterState, setFilterState] = useState("ALL");

  const handleEditClick = (project) => {
    setEditingId(project.id);
    setEditForm({
      projectTitle: project.projectTitle,
      clientName: project.clientName,
      state: project.state
    });
  };

  const handleSave = async (id) => {
    try {
      await projectService.update(id, editForm);


      setProjects(projects.map(p => (p.id === id ? { ...p, ...editForm } : p)));

      setEditingId(null);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const [projects, setProjects] = useState([]);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!window.confirm("¿El proyecto se eliminará, deseas continuar?")) return;
    try {
      await projectService.delete(id);
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error al eliminar el proyecto", error);
    }
  };

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

  const filteredProjects = projects.filter(p =>
    filterState === "ALL" || p.state === filterState
  );
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
              {editingId === project.id ? (
                <>
                  <span className={styles.disabledField}>{editForm.clientName}</span>
                  <input
                    className={styles.editInput}
                    value={editForm.projectTitle}
                    onChange={(e) => setEditForm({ ...editForm, projectTitle: e.target.value })}
                  />
                  <select
                    className={styles.editSelect}
                    value={editForm.state}
                    onChange={(e) => setEditForm({ ...editForm, state: e.target.value })}
                  >
                    <option value="PENDING">PENDING</option>
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </>
              ) : (
                <>
                  <span>{project.clientName}</span>
                  <span>{project.projectTitle}</span>
                  <span>{project.state}</span>
                </>
              )}
            </div>

            <div className={styles.actions}>
              {editingId === project.id ? (
                <>
                  <img
                    src={check}
                    alt="Save"
                    className={styles.actionIcon}
                    onClick={() => handleSave(project.id)}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src={close}
                    alt="Cancel"
                    className={styles.actionIcon}
                    onClick={() => setEditingId(null)}
                    style={{ cursor: 'pointer' }}
                  />
                </>
              ) : (
                <>
                  <img
                    src={Edit}
                    alt="EditIcon"
                    onClick={() => handleEditClick(project)}
                    style={{ cursor: 'pointer' }}
                  />
                  <img
                    src={Delete}
                    alt="Delete"
                    onClick={() => handleDelete(project.id)}
                    style={{ cursor: 'pointer' }}
                  />
                </>
              )}
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