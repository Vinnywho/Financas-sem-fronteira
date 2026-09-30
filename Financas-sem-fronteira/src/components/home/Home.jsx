import React from "react";
import { HashLink } from 'react-router-hash-link';
import styles from "./Home.module.css";
import janina from "../../assets/images/Janina.png";
import aos from "aos";
import "aos/dist/aos.css";

function Home() {
  React.useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className={styles.home} id="home">
      <div className={styles.backgroundContainer}>
        <div className={`${styles.circulo} ${styles.circulo1}`}></div>
        <div className={`${styles.circulo} ${styles.circulo2}`}></div>
      </div>

      <section className={styles.homeContainer}>
        <div className={styles.infos}>
          <h1 data-aos="fade-right" className={styles.titulo}>
            EDUCAÇÃO FINANCEIRA QUE <span className={styles.destaque}>TRANSFORMA</span>{" "}
            COMPORTAMENTOS.
          </h1>
          <p data-aos="fade-right" data-aos-delay="100">
            A <span className={styles.destaque}>FINANÇAS SEM FRONTEIRA </span>
            é especializada em Educação Financeira
            Comportamental. Como agentes de transformação, auxiliamos as pessoas na sua
            relação com o dinheiro por meio de uma abordagem acolhedora, personalizada e
            fundamentada na neurociência, considerando o ser humano em sua totalidade
            para promover escolhas mais conscientes, autonomia e qualidade de vida.
          </p>
          <div
            className={styles.botoesHome}
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <HashLink smooth to="/#contato">
              <button className={styles.consultoriaBtn}> Contato </button>
            </HashLink>
            <HashLink smooth to="/#solucoes">
              <button className={styles.planosBtn}>Conheça nossas soluções</button>
            </HashLink>
          </div>
        </div>
        <div
          className={styles.janinaWrapper}
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <img className={styles.janina} src={janina} alt="Janina" />

          <div className={`${styles.card} ${styles.cardPos1}`} data-aos="zoom-in" data-aos-delay="800">
            <div className={styles.flexContainer}>
              <div className={styles.textoBox}>
                <p className={styles.frase}>
                  Respeitando cada indivíduo como único.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardPos2}`} data-aos="zoom-in" data-aos-delay="900">
            <div className={styles.flexContainer}>
              <div className={styles.textoBox}>
                <p className={styles.frase}>
                  Mudando conceitos e valores através do exemplo.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardPos3}`} data-aos="zoom-in" data-aos-delay="1000">
            <div className={styles.flexContainer}>
              <div className={styles.textoBox}>
                <p className={styles.frase}>
                  Despertar a reflexão com relação a utilização do dinheiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
