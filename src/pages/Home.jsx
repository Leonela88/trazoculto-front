import Title from "../components/atoms/Title";
import profilePic from "../assets/Maru.png";
import styles from "./home.module.css";

const Home = () => {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.cardsWrapper}>

        <section className={styles.aboutCard}>
          <Title level ={2} color="dark" className={styles.cardTitle}>Biografía</Title>

          <div className={styles.cardBodyFloated}>
            <img
              src={profilePic}
              alt="Mariel Pannunzio"
              className={styles.profileImg}
            />
            <p className={styles.bioText}>
              Bienvenidos a trazoculto, un espacio donde convergen todas aquellas cosas que, anónimamente, hacemos los editores para que un texto sea legible.
              Digo anónimamente porque me atrevo a afirmar que quienes no forman parte de este multiverso raras veces pueden percibir que un material editorial haya pasado por las manos de alguien más. Y, sin embargo, ahí estamos: en los márgenes, en las pausas, en las dudas, en las decisiones invisibles.
              Porque entre lo que se dice y lo que se calla, la edición descubre.
              Pero empecemos por el principio.
              Mi nombre es Mariel Pannunzio...
            </p>
          </div>
        </section>
        <section className={styles.aboutCard}>
          <Title level={2} color="dark" className={styles.cardTitle}>Un poco de mi trayectoria editorial</Title>
          <div className={styles.cardBody}>
            <div className={styles.experienceItem}>
              <strong className={styles.company}>Editorial El Ateneo</strong>
              <p className={styles.role}>Supervisión integral de contenido, revisión de estilo y coherencia editorial.</p>
              <ul className={styles.bookList}>
                <li>Brota – Guillermina Lopata</li>
                <li>Brilla – Guillermina Lopata</li>
                <li>Nadie te enseña – Carina Schwindt y Mariana Fernández</li>
                <li>Regulación emocional y Mindfulness en niños – Carina Schwindt</li>
                <li>Pediatra al rescate – Federico Díaz</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <strong className={styles.company}>Edebé</strong>
              <p className={styles.role}>Adaptación regional y adecuación de contenidos.</p>
              <ul className={styles.bookList}>
                <li>Manuales de 6.º y 7.º grado de Lengua y Literatura</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <strong className={styles.company}>Salvat</strong>
              <p className={styles.role}>Adaptación regional de textos originales.</p>
              <ul className={styles.bookList}>
                <li>Cuentos de Disney</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;