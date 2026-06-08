// organisms/ExperienceCard/ExperienceCard.tsx
import Title from "../../atoms/Title/Title";
import ExperienceItem from "../../molecules/ExperienceItem/ExperienceItem";
import styles from "./experienceCard.module.css";

interface Experience {
  company: string;
  role: string;
  books: string[];
}

const experiences: Experience[] = [
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
  },
   {
    company: "Editorial Minotauro",
    role: "Corrección de estilo y ortotipografía para nuevas ediciones de narrativa de terror y sagas de fantasía.",
    books: ["Paperbacks from Hell" ,"Burnt Offerings", "Saga Dragonlance", "Saga Warhammer"]
  }
];

const ExperienceCard: React.FC = () => {
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
