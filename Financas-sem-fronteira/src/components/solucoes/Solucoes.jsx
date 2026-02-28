import React from "react";
import styles from "./Solucoes.module.css";
import consultoria from "../../assets/icons/Consultoria.svg";
import formacao from "../../assets/icons/Cursos.svg";
import mentoria from "../../assets/icons/Mentoria.svg";
import workshop from "../../assets/icons/Workshops.svg";

function Servicos() {
  return (
    <section className={styles.solucoes} id="solucoes">
      <div className={styles.containerSolucoes}>
        <div className={styles.solucoesInfo}>
          <h2 className={styles.solucoesTitulo}>
            NOSSAS <span className={styles.destaqueSolucoes}>SOLUÇÕES</span>
          </h2>
          <p className={styles.solucoesDescricao}>
            Descubra como podemos transformar sua relação com o dinheiro
            impulsionar sua saúde financeira.
          </p>
        </div>
      
        <div className={styles.solucoesCards}>
          <div className={`${styles.solucoesCard} card-1`}>
            <img src={consultoria} className={styles.solucoesImg} alt="" />
            <h3 className={styles.solucoesCardTitulo}>CONSULTORIA E FOCO</h3>
          </div>

          <div className={`${styles.solucoesCard} card-2`}>
            <img src={formacao} className={styles.solucoesImg} alt="" />
            <h3 className={styles.solucoesCardTitulo}>FORMAÇÕES E CURSOS</h3>
          </div>

          <div className={`${styles.solucoesCard} card-3`}>
            <img src={workshop} className={styles.solucoesImg} alt="" />
            <h3 className={styles.solucoesCardTitulo}>WORKSHOPS E OFICINAS</h3>
          </div>

          <div className={`${styles.solucoesCard} card-4`}>
            <img src={mentoria} className={styles.solucoesImg} alt="" />
            <h3 className={styles.solucoesCardTitulo}>MENTORIA EM GRUPO</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default Servicos;