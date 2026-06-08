import styles from "./home.module.css";
import BioCard from "../components/organisms/BioCard/BioCard";
import ExperienceCard from "../components/organisms/ExperienceCard/ExperienceCard";

const Home: React.FC = () => {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.cardsWrapper}>
        <BioCard />
        <ExperienceCard />
      </div>
    </main>
  );
};

export default Home;
