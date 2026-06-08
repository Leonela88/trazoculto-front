import React from "react";
import { Link } from "react-router";
import styles from "./linkButton.module.css";

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  );
};

export default LinkButton;
