import { ReactNode } from "react";
import styles from "./title.module.css";

interface TitleProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: "light" | "dark" | string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, level = 1, color = "light", className = "" }) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  const titleClass = `${styles.title} ${styles[color] || ""} ${className}`;

  return <Tag className={titleClass}>{children}</Tag>;
};

export default Title;
