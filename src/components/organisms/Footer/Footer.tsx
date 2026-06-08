import styles from "./footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.left}>
          <span>©</span>
          <span className={styles.divider}>|</span>
          <span>trazoculto</span>
        </div>
        <div className={styles.center}>2026</div>
        <div className={styles.right}>
          by Mariel <br /> Pannunzio
        </div>
      </div>
    </footer>
  )
}

export default Footer;
