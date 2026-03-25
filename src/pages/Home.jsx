import Title from "../components/atoms/Title";
import profilePic from "../assets/Maru.png"; 
import styles from "./home.module.css";

const Home = () => {
  
  return (
    <main className={styles.homeContainer}>
      <div className={styles.cardsWrapper}>
        
        <section className={styles.aboutCard}>
          <Title color="dark" className={styles.cardTitle}>Biografía</Title>
          <div className={styles.cardContent}>
            <img 
              src={profilePic} 
              alt="Mariel Pannunzio" 
              className={styles.profileImg} 
            />
            <p className={styles.bioText}>
              Lorem ipsum vel sit urna est tortor velit placerat enim luctus quam 
              mauris maecenas vitae non tincidunt etiam suscipit enim id rhoncus 
              sed sed sit non in a iaculis libero semper sed pellentesque donec 
              et facilisis justo lectus mollis magna facilisi sed cras et dictum 
              lectus nam eget aliquam interdum.
            </p>
          </div>
        </section>

     
        <section className={styles.aboutCard}>
          <Title color="dark" className={styles.cardTitle}>Trayectoria</Title>
          <div className={styles.cardContent}>
         <div className={styles.emptyContent}>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Home;