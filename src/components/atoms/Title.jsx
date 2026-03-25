import styles from "./title.module.css";

const Title = ({ children, level = 1, color = "light", className = "" }) => {
  const Tag = `h${level}`;

  const titleClass = `${styles.title} ${styles[color] || ""} ${className}`;

  return <Tag className={titleClass}>{children}</Tag>;
};

export default Title;