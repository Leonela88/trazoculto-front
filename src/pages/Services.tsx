// pages/Services.tsx
import ServicesGrid from "../components/organisms/ServicesGrid/ServicesGrid";
import styles from "./services.module.css";

const Services: React.FC = () => {
  return (
    <main className={styles.container}>
      <ServicesGrid />
    </main>
  );
};

export default Services;
