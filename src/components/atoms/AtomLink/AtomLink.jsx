import { Link } from "react-router";
import styles from "./atomlink.module.css";

const AtomLink = ({ to, children, className }) => {
  return (
    <Link to={to} className={`${styles.link} ${className}`}>
      {children}
    </Link>
  );
};

export default AtomLink;