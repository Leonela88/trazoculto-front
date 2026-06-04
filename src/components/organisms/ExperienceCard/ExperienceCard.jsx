// organisms/ExperienceCard/ExperienceCard.jsx
import Title from "../../atoms/Title/Title";
import ExperienceItem from "../../molecules/ExperienceItem/ExperienceItem";
import styles from "./experienceCard.module.css";

const experiences = [
  {
    company: "Editorial El Ateneo",
    role: "Supervisión integral de contenido, revisión de estilo y coherencia editorial.",
    books: ["Brota – Guillermina Lopata", "Brilla – Guillermina Lopata", "Nadie te enseña – Carina Schwindt y Mariana Fernández", "Regulación emocional y Mindfulness en niños – Carina Schwindt", "Pediatra al rescate – Federico Díaz"]
  },
  {
    company: "Edebé",
    role: "Adaptación regional y adecuación de contenidos.",
    books: ["Manuales de 6.º y 7.º grado de Lengua y Literatura"]
  },
  {
    company: "Salvat",
    role: "Adaptación regional de textos originales.",
    books: ["Cuentos de Disney"]
  }
];

const ExperienceCard = () => {
  return (
    <section className={styles.card}>
      <Title level={2} color="dark" className={styles.cardTitle}>Un poco de mi trayectoria editorial</Title>
      <div className={styles.cardBody}>
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceCard;