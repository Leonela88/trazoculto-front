import React from "react";
import { Link } from "react-router";
import styles from "./atomlink.module.css";

interface AtomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const AtomLink: React.FC<AtomLinkProps> = ({ to, children, className = "" }) => {
  return (
    <Link to={to} className={`${styles.link} ${className}`}>
      {children}
    </Link>
  );
};

export default AtomLink;
