import ContactForm from "../components/organisms/ContactForm/ContactForm";
import styles from "./contact.module.css";

const Contact: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <p className={styles.intro}>
          ¿Tenés un proyecto o pregunta? Escribime.
        </p>
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
