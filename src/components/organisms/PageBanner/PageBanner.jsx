import styles from "./pageBanner.module.css";

const PageBanner = ({ title, subtitle }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.line} />
    </div>
  );
};

export default PageBanner;