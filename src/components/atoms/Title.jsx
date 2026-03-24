import styles from "./title.module.css";

const Title = ({ children, level = 1, color = "light" }) => {
  const Tag = `h${level}`;

  // Usamos una validación: si el color existe en styles, lo pone, si no, nada.
  const titleClass = `${styles.title} ${styles[color] || ""}`;

  return <Tag className={titleClass}>{children}</Tag>;
};

export default Title;