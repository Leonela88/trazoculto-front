// src/components/atoms/Input/Input.jsx
import styles from "./input.module.css";

const Input = ({ id, type = "text", placeholder, value, onChange, required = false, disabled = false, className = "" }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.visuallyHidden}>{placeholder}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`${styles.input} ${className}`}
      />
    </div>
  );
};

export default Input;