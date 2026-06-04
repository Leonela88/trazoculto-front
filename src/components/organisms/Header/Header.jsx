import Nav from "../../molecules/Nav/Nav";
import Title from "../../atoms/Title/Title";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.hero}>
        <Nav />
        <div className={styles.content}>
          <Title level={1}>El editor no dice lo que todos saben...revela lo que no se puede decir.</Title>
          <div className={styles.buttonWrapper}>
            <LinkButton to="/services">Ver Servicios</LinkButton>
          </div>
        </div>
      </header>
</>
  )
}

export default Header