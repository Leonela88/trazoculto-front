import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import projectService from "../service/apiProject";
import clientService from "../service/apiClient";
import dropdown from "../assets/dropdown.png";
import styles from "./project.module.css";
import Favicon from "../assets/favicon.png";
import Title from "../components/atoms/Title";

const Project = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    editingServiceId: "",
    clientId: "",
    dateOfSubmission: "",
    notes: ""
  });

  const [newClient, setNewClient] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await clientService.getAll();
        setClients(data || []);
      } catch (e) { console.error(e); }
    };
    fetchClients();
  }, []);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      await projectService.create(formData);
      navigate("/dashboard");
    } catch (e) { console.error(e); }
  };

  const handleCreateClient = async () => {
    try {
      const created = await clientService.createClient(newClient);
      setClients([...clients, created]);
      setFormData({ ...formData, clientId: created.id });
      setIsModalOpen(false);
      setNewClient({ name: "", email: "" });
    } catch (e) { console.error(e); }
  };

  return (

    <div className={styles.container}>
      <div className={styles.projectHeader}>
        <h1 className={styles.title}>Dashboard</h1>
        <img
          src={Favicon}
          alt="logo"
          className={styles.feather}
          onClick={""}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <div className={styles.card}>
        <Title color="dark" className={styles.subtitle}>Nuevo Proyecto</Title>
        <form onSubmit={handleCreateProject} className={styles.form}>
          <div className={styles.row}>
            <input
              className={styles.input}
              placeholder="Título:"
              onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
            />
          </div>

          <div className={styles.row}>
            <textarea
              className={styles.textarea}
              placeholder="Descripción:"
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
            />
          </div>
          <div className={styles.gridRow}>
            <div className={styles.selectWrapper}>
              <select className={styles.select} onChange={(e) => setFormData({ ...formData, editingServiceId: e.target.value })}>
                <option value="">Servicio:</option>
                <option value="1">READING_REPORT</option>
                <option value="3">STYLE_CORRECTION</option>
                <option value="4">ORTHOTYPOGRAPHIC_CORRECTION</option>
                <option value="5">NEW_AUTHORS_GUIDANCE</option>
                <option value="6">MACRO_EDITING,</option>
                <option value="7">MICRO_EDITING,</option>
                <option value="8">OTHERS</option>
              </select>
              <img src={dropdown} className={styles.arrowIcon} alt="arrow" />
            </div>
            <div className={styles.clientGroup}>
              <div className={styles.selectWrapper} style={{ flex: 1 }}>
                <select className={styles.select} value={formData.clientId} onChange={(e) => setFormData({ ...formData, clientId: e.target.value })}>
                  <option value="">Cliente:</option>
                  {clients.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <img src={dropdown} className={styles.arrowIcon} alt="arrow" />
              </div>
              <button type="button" className={styles.addBtn} onClick={() => setIsModalOpen(true)}>+Añadir</button>
            </div>
          </div>
          <div className={styles.gridRow}>
            <input type="date" className={styles.input} onChange={(e) => setFormData({ ...formData, dateOfSubmission: e.target.value })} />
            <textarea className={styles.textarea} placeholder="Nota:" onChange={(e) => setFormData({ ...formData, notes: e.target.value })} />
          </div>
          <div className={styles.actions}>
            <button type="submit" className={styles.createBtn}>Crear</button>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <h3>Nuevo cliente:</h3>
            <input className={styles.modalInput} placeholder="Nombre" onChange={(e) => setNewClient({ ...newClient, name: e.target.value })} />
            <input className={styles.modalInput} placeholder="E-mail" onChange={(e) => setNewClient({ ...newClient, email: e.target.value })} />
            <div className={styles.modalFooter}>
              <button type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
              <button type="button" className={styles.modalBtn} onClick={handleCreateClient}>Crear</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;