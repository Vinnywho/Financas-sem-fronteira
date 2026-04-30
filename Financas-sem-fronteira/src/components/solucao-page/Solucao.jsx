import React from "react";
import styles from "./Solucao.module.css";
import aos from "aos";
import "aos/dist/aos.css";

function Solucao({ titulo, textoprimario, textosecundario, imagem }) {
  React.useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className={styles.solucao} id="solucoes" data-aos="fade-up" data-aos-delay="200">
      <div className={styles.solucaoContainer}>
        <div className={styles.introSection}>
          <h2 className={styles.introTitle}>{titulo}</h2>
          <p className={styles.introText}>{textoprimario}</p>
          <p className={styles.introTextSecondary}>{textosecundario}</p>
        </div>
        <img src={imagem} alt="Imagem" className={styles.imagem} />
      </div>
    </div>
  );
}

export default Solucao;
