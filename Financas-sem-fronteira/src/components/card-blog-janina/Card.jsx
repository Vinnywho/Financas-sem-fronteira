import React from "react";
import styles from "./Card.module.css";
import aos from "aos";
import "aos/dist/aos.css";

function Card({ title, desc, bgImage, tipo, data}) {
  React.useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.aosWrapper} data-aos="fade-up">
      <div className={styles["projeto-principal"]}>
        <img src={bgImage} alt={title} />
        <div className={styles["projeto-principal-texto"]}>
          <span>{tipo.join(", ")}</span>
          <h3>{title}</h3>
          <p>{data}</p>
          <p>{desc}</p>
          <button className={styles["btn-blog-principal"]}>Saiba mais</button>
        </div>
      </div>
    </div>
  );
}

export default Card;