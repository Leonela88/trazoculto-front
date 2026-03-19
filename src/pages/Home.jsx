// import styles from "./Home.module.css";

const Home = ({ isAdmin = false }) => {
  return (
    <div >
      <h1>Biografía</h1>
      <p>Soy una profesional de...</p>

      {isAdmin && (
        <button >✏️ Editar Biografía</button>
      )}
    </div>
  );
};

export default Home