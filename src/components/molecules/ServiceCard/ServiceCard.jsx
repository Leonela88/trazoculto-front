import styles from "./serviceCard.module.css";

const ServiceCard = ({ id, title, description }) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.body}>
        <span className={styles.number}>{id}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;