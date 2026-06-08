import React from "react";
import styles from "./textarea.module.css";

interface TextareaProps {
  id: string;
  name?: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  rows = 5,
  className = "",
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.visuallyHidden}>
        {placeholder}
      </label>
      <textarea
        id={id}
        name={name || id}
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
