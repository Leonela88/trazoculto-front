import styles from "./card.module.css";

const Card = ({ children, className }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`}>
      {children}
    </div>
  );
};

export default Card;