// src/components/atoms/Textarea/Textarea.jsx
import styles from "./textarea.module.css";

const Textarea = ({ id, placeholder, value, onChange, required = false, disabled = false, rows = 5, className = "" }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.visuallyHidden}>{placeholder}</label>
      <textarea
        id={id}
        name={id}  
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`${styles.textarea} ${className}`}
      />
    </div>
  );
};

export default Textarea;