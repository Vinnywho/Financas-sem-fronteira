import React from "react";
import styles from "./Proposito.module.css";
import olho from "../../assets/icons/eye-svgrepo-com.svg";
import raio from "../../assets/icons/lightning-01-svgrepo-com.svg";
import chart from "../../assets/icons/chart-svgrepo-com.svg";

const FinancialHealth = () => (
  <section className={styles.proposito} id="proposito">
    <div className={styles.containerProposito}>
      <div className={styles.graficoContainer}>
        <div className={styles.card}>
          <div className={styles.graficoHeader}>
            <div>
              <h3>Performance</h3>
              <p>Crescimento Sustentável</p>
            </div>
          </div>
          <div className={styles.graficoBarContainer}>
            {[30, 45, 40, 65, 55, 90, 100].map((h, i) => (
              <div key={i} className={styles.graficoBar} style={{ height: `${h}%` }}>
                <span className={styles.tooltip}>{h}%</span>
              </div>
            ))}
          </div>
          <div className={styles.graficoFooter}>
            <span>Início do Ciclo</span>
            <span>Otimização</span>
            <span>Resultado Atual</span>
          </div>
        </div>
      </div>

      <div className={styles.descricaoProposito}>
        <header>
          <h1 className={styles.title}>
            Sua Saúde Financeira: <span>O Nosso Propósito</span>
          </h1>
        </header>
        <p>
          A falta de conhecimento financeiro é o maior obstáculo para o
          crescimento. Nossa missão é democratizar o acesso à inteligência de
          dados, capacitando indivíduos e empresas a tomarem decisões financeiras
          informadas, alcançando estabilidade e prosperidade. <br></br>
          Nosso compromisso gira em torno de três pilares fundamentais:
        </p>

        <div className={styles.featuresGrid}>
          {["Transparência", "Agilidade", "Resultados"].map((text, i) => (
            <div key={i} className={styles.featureItem}>
              <div className={styles.iconBox}>
                {i === 0 && <img src={olho} alt="Olho" />}
                {i === 1 && <img src={raio} alt="Raio" />}
                {i === 2 && <img src={chart} alt="Gráfico" />}
              </div>
              <h4>{text}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FinancialHealth;