import styles from "./logo.module.css";
import logoImg from "../../assets/greybr-logo-contorno.png"; 

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logoImg} alt="Trazoculto Logo" className={styles.image} />
    </div>
  );
};

export default Logo;