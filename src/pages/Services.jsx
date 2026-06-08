// pages/Services.jsx
import ServicesGrid from "../components/organisms/ServicesGrid/ServicesGrid";
import styles from "./services.module.css";

const Services = () => {
  return (
    <main className={styles.container}>
      <ServicesGrid />
    </main>
  );
};

export default Services;