import ServiceCard from "../../molecules/ServiceCard/ServiceCard";
import Chip from "../../atoms/Chip/Chip";
import Title from "../../atoms/Title/Title";
import { mainServices, otherServices } from "../../../data/servicesData";
import styles from "./servicesGrid.module.css";

const ServicesGrid = () => {
  return (
    <section className={styles.section}>
      <Title level={2} color="dark" className={styles.sectionTitle}>
        Servicios Editoriales
      </Title>
      <div className={styles.grid}>
        {mainServices.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
      <div className={styles.others}>
        <p className={styles.othersTitle}>Otros</p>
        <div className={styles.chips}>
          {otherServices.map((label, i) => (
            <Chip key={i} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;