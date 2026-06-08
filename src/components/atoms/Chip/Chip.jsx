// atoms/Chip/Chip.jsx
import styles from "./chip.module.css";

const Chip = ({ label }) => {
  return <span className={styles.chip}>{label}</span>;
};

export default Chip;