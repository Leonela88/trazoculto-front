import AtomLink from "../../atoms/AtomLink/AtomLink";
import Logo from "../../atoms/Logo/Logo";
import styles from "./nav.module.css";

const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.navInner}>
                <AtomLink to="/" className={styles.logoLink}>
                    <div className={styles.logoGroup}> 
                        <Logo/>
                        <span className={styles.brandName}>trazoculto</span>
                    </div>
                </AtomLink>

                <div className={styles.linksGroup}>
                    <AtomLink to="/contact">Contacto</AtomLink>
                    <span className={styles.divider}>|</span>
                    <AtomLink to="/services">Servicios</AtomLink>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
