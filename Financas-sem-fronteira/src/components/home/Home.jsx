import React from "react";
import styles from "./Home.module.css";
import janina from "../../assets/images/Janina.png";
import aos from "aos";
import "aos/dist/aos.css";

function Home() {
  React.useEffect(() => {
      aos.init({ duration: 1000,
        once: true
      });
      
    }, []);
  return (
    <section className={styles.home} id="home">
      <div className={styles.backgroundContainer}>
        <div className={`${styles.circulo} ${styles.circulo1}`}></div>
        <div className={`${styles.circulo} ${styles.circulo2}`}></div>
      </div>

      <section className={styles.homeContainer}>
        <div className={styles.infos}>
          <h1 data-aos="fade-right">
            CONSTRUA SEU <span className={styles.destaque}>LEGADO</span> FINANCEIRO
          </h1>
          <p data-aos="fade-right" data-aos-delay="100">
            <span className={styles.destaque}>FINANÇAS SEM FRONTEIRA</span> é uma empresa voltada para educação
            financeira comportamental e tem como objetivo enriquecer a relação
            das pessoas com o dinheiro. Nosso propósito é disseminar a educação
            financeira comportamental oferecendo um tratamento multidisciplinar,
            com o intuito de ver o ser humano como biopsicossocioespiritual.
          </p>
          <div className={styles.botoesHome} data-aos="fade-right" data-aos-delay="300">
            <button className={styles.consultoriaBtn}>Consultoria</button>
            <button className={styles.planosBtn}>Conheça os planos</button>
          </div>
        </div>
        <div className={styles.janinaWrapper} data-aos="fade-left" data-aos-delay="500">
          <img className={styles.janina} src={janina} alt="Janina" />
          
          <div className={`${styles.card} ${styles.cardPos1}`}>
            <div className={styles.flexContainer}>
              <div className={styles.textoBox}>
                <p className={styles.frase}>Respeitando cada indivíduo como único.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardPos2}`}>
            <div className={styles.flexContainer}>
              <div className={styles.textoBox}>
                <p className={styles.frase}>Mudando conceitos e valores através do exemplo.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardPos3}`}>
            <div className={styles.flexContainer}>
              <div className={styles.textoBox}>
                <p className={styles.frase}>Despertar a reflexão com relação a utilização do dinheiro.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;