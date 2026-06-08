import { useState } from "react";
import Title from "../../atoms/Title/Title";
import profilePic from "../../../assets/Maru.png";
import styles from "./bioCard.module.css";

const BioCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.card}>
      <Title level={2} color="dark" className={styles.cardTitle}>Biografía</Title>
      <div className={styles.cardBodyFloated}>
        <div className={`${styles.bioContainer} ${!isExpanded ? styles.collapsed : ""}`}>
          <img src={profilePic} alt="Mariel Pannunzio" className={styles.profileImg} />
          <div className={styles.bioText}>
            <p className={styles.bioParagraph}>
              Digo anónimamente porque me atrevo a afirmar que quienes no forman parte de este multiverso raras
              veces pueden percibir que un material editorial haya pasado por las manos de alguien más. Y, sin embargo,
              ahí estamos: en los márgenes, en las pausas, en las dudas, en las decisiones invisibles.
              Porque entre lo que se dice y lo que se calla, la edición descubre.
            </p>
            <p className={styles.bioParagraph}>
              Pero empecemos por el principio.
              Mi nombre es Mariel Pannunzio. Crecí en el seno de una familia obrera en el conurbano norte del Gran
              Buenos Aires a finales de los años noventa. Desde que tengo memoria, siempre me refugié en los libros y la
              música. Guardo dos recuerdos puntuales de mi infancia: las noches en que mi papá llegaba de trabajar y
              me leía algún libro de la biblioteca Anteojito antes de dormir, y el día en que, revolviendo cassettes suyos,
              descubrí a Pink Floyd.
            </p>
            <p className={styles.bioParagraph}>
              Esos momentos despertaron en mí una curiosidad insaciable por las palabras. La música, cargada de
              significado, encendía en mi pecho un fuego imposible de apagar. Me preguntaba —todavía me pregunto—
              cómo unas simples frases podían hacerme viajar a mundos imposibles o hacerme sentir cosas que no
              encontraba cómo explicar.
            </p>
            <p className={styles.bioParagraph}>
              Siempre supe que quería estudiar algo relacionado con ese mundo que me había enseñado a mirar y a
              intentar dar nombre a las cosas.
            </p>
            <p className={styles.bioParagraph}>
              Sin embargo, no fue hasta bien entrados mis casi treinta años que decidí hacer algo por esa pasión. Estudié
              Edición en la Universidad de Buenos Aires y todo cobró sentido. Comprendí entonces que el mundo de un
              editor es transversal a muchas áreas, pero fue en la corrección de estilo donde mi obsesión encontró forma
              y dirección, ese territorio donde las palabras lo son todo.
            </p>
            <p className={styles.bioParagraph}>
              Editar es escuchar lo que el texto intenta decir.
              Y muchas veces, hacer hablar lo que el texto aún no sabe decir.
            </p>
            <p className={styles.bioParagraph}>
              Un texto no se crea solo con palabras: escribirlo y publicarlo no es suficiente. No. Existen múltiples tareas
              previas que permanecen ocultas para casi la totalidad del mundo lector. Yo soy, quizás, una de las primeras
              lectoras: me aseguro de que el escrito tenga sentido y se dirija al público para el que fue pensado, evito que
              los vicios del escritor interfieran en la lectura y chequeo fuentes y datos, entre muchas otras cosas.
            </p>
            <p className={styles.bioParagraph}>
              El editor no dice lo que todos saben.
              El editor revela lo que todavía no se puede decir.
            </p>
            <p className={styles.bioParagraph}>
              A lo largo de mi trayectoria tuve muchos trabajos, pero hoy combino la gestión documental en una
              consultora con la edición, enfocándome principalmente en la corrección. Habito ese territorio silencioso
              donde el lenguaje se afina, donde las ideas encuentran su forma y donde cada palabra ocupa el lugar que le
              corresponde.
            </p>
            <p className={styles.bioParagraph}>
              trazoculto nace de esa convicción:
              de que editar no es corregir errores, sino descubrir sentidos.
              De que un texto no solo se escribe: también se escucha, se cuestiona, se pule.
              De que la edición sucede, muchas veces, en lo invisible.
              Porque ahí, en lo oculto, es donde el texto finalmente aprende a decir lo que vino a decir.
            </p>
          </div>
        </div>
        <button 
          className={styles.toggleBtn} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Leer menos" : "Leer más"}
        </button>
      </div>
    </section>
  );
};

export default BioCard;
