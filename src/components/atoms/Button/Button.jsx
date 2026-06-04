// src/components/atoms/Button/Button.jsx
import styles from "./button.module.css";

const Button = ({ children, type = "button", variant = "primary", disabled = false, onClick, className = "" }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;