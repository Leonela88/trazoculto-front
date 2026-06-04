// organisms/BioCard/BioCard.jsx
import Title from "../../atoms/Title/Title";
import profilePic from "../../../assets/Maru.png";
import styles from "./bioCard.module.css";

const BioCard = () => {
  return (
    <section className={styles.card}>
      <Title level={2} color="dark" className={styles.cardTitle}>Biografía</Title>
      <div className={styles.cardBodyFloated}>
        <img src={profilePic} alt="Mariel Pannunzio" className={styles.profileImg} />
        <p className={styles.bioText}>
          ¿Quién soy?
          Bienvenidos a trazoculto, un espacio donde convergen todas aquellas cosas que, anónimamente, hacemos los editores para que un texto sea legible.
          {/* ... resto del texto */}
        </p>
      </div>
    </section>
  );
};

export default BioCard;