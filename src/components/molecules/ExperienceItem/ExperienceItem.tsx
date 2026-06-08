// molecules/ExperienceItem/ExperienceItem.tsx
import styles from "./experienceItem.module.css";

interface ExperienceItemProps {
  company: string;
  role: string;
  books: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, role, books }) => {
  return (
    <div className={styles.experienceItem}>
      <strong className={styles.company}>{company}</strong>
      <p className={styles.role}>{role}</p>
      <ul className={styles.bookList}>
        {books.map((book, i) => (
          <li key={i}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
