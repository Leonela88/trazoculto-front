import { useLocation } from "react-router";
import Nav from "../../molecules/Nav/Nav";
import Title from "../../atoms/Title/Title";
import LinkButton from "../../atoms/LinkButton/LinkButton";
import PageBanner from "../PageBanner/PageBanner";
import styles from "./header.module.css";

const heroPaths = ["/"];

const banners = {
  "/services": { title: "Servicios", subtitle: "¿Tenés un proyecto o pregunta? Escribime." },
  "/contact":  { title: "Contacto", subtitle: "Aquí es donde las palabras llegan a mí. Dejá tu mensaje." },
};

const Header = () => {
  const { pathname } = useLocation();
  const isHero = heroPaths.includes(pathname);
  const banner = banners[pathname];

  return (
    <header>
      {isHero ? (
        <div className={styles.hero}>
          <Nav />
          <div className={styles.content}>
            <Title level={1}>El editor no dice lo que todos saben...revela lo que no se puede decir.</Title>
            <div className={styles.buttonWrapper}>
              <LinkButton to="/services">Ver Servicios</LinkButton>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Nav />
          {banner && <PageBanner title={banner.title} subtitle={banner.subtitle} />}
        </>
      )}
    </header>
  );
};

export default Header;