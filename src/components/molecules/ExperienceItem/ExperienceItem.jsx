// molecules/ExperienceItem/ExperienceItem.jsx
import styles from "./experienceItem.module.css";

const ExperienceItem = ({ company, role, books }) => {
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