import { Link } from "react-router";
import styles from "./linkButton.module.css";

const LinkButton = ({ to, children }) => {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  );
};

export default LinkButton;