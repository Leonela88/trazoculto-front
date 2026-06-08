import React from "react";
import styles from "./input.module.css";

interface InputProps {
  id: string;
  name?: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  className = "",
}) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.visuallyHidden}>
        {placeholder}
      </label>
      <input
        id={id}
        name={name || id}
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
