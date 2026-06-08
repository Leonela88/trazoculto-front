import React from "react";
import styles from "./chip.module.css";

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
  return <span className={styles.chip}>{label}</span>;
};

export default Chip;
