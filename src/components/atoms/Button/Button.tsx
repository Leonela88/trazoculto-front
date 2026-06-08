import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "ghost"; // Added common variants, can be adjusted
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant] || ""} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
