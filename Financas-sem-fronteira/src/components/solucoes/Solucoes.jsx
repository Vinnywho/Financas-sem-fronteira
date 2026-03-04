import React from "react";
import styles from "./Solucoes.module.css";
import consultoria from "../../assets/icons/Consultoria.svg";
import formacao from "../../assets/icons/Cursos.svg";
import mentoria from "../../assets/icons/Mentoria.svg";
import workshop from "../../assets/icons/Workshops.svg";
import aos from "aos";
import "aos/dist/aos.css";

function Servicos() {
  React.useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className={styles.solucoes} id="solucoes">
      <div className={styles.containerSolucoes}>
        <div className={styles.solucoesInfo} data-aos="zoom-in" data-aos-delay="100">
          <h2 className={styles.solucoesTitulo}>
            NOSSAS <span className={styles.destaqueSolucoes}>SOLUÇÕES</span>
          </h2>
          <p className={styles.solucoesDescricao}>
            Descubra como podemos transformar sua relação com o dinheiro
            impulsionar sua saúde financeira.
          </p>
        </div>

        <div className={styles.solucoesCards}>
          <div data-aos="fade-up" data-aos-delay="300">
            <div className={`${styles.solucoesCard} card-1`}>
              <img src={consultoria} className={styles.solucoesImg} alt="" />
              <h3 className={styles.solucoesCardTitulo}>CONSULTORIA E FOCO</h3>
              <p>Oferecemos consultoria personalizada para impulsionar sua saúde financeira.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="500">
            <div className={`${styles.solucoesCard} card-2`}>
              <img src={formacao} className={styles.solucoesImg} alt="" />
              <h3 className={styles.solucoesCardTitulo}>FORMAÇÕES E CURSOS</h3>
              <p>Desenvolvemos cursos e formações personalizadas para fortalecer sua base financeira.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="700">
            <div className={`${styles.solucoesCard} card-3`}>
              <img src={workshop} className={styles.solucoesImg} alt="" />
              <h3 className={styles.solucoesCardTitulo}>WORKSHOPS E OFICINAS</h3>
              <p>Oferecemos workshops e oficinas práticas para aprimorar suas habilidades financeiras.</p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="900">
            <div className={`${styles.solucoesCard} card-4`}>
              <img src={mentoria} className={styles.solucoesImg} alt="" />
              <h3 className={styles.solucoesCardTitulo}>MENTORIA EM GRUPO</h3>
              <p>Oferecemos mentoria em grupo para fortalecer sua jornada financeira com apoio coletivo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicos;