import React from "react";
import styles from "./SobreNos.module.css";
import logoesticada from "../../assets/icons/LogoEsticada.svg";
import ScrollStack, { ScrollStackItem } from "../scrollstack/ScrollStack";
import IconVisao from "../../assets/icons/olho.svg";
import IconMissao from "../../assets/icons/dart-mission-goal-success-svgrepo-com.svg";
import IconValores from "../../assets/icons/diamond-business-finance-svgrepo-com.svg";

const cards = [
  {
    icon: IconVisao,
    alt: "Visão",
    label: "01",
    title: "VISÃO",
    text: "Ser agente de transformação na forma como as pessoas se relacionam com o dinheiro, despertando consciência financeira, promovendo comportamentos mais equilibrados e ampliando a liberdade para realizar sonhos e viver com mais propósito.",
  },
  {
    icon: IconMissao,
    alt: "Missão",
    label: "02",
    title: "MISSÃO",
    text: "Promover a Educação Financeira Comportamental por meio de uma abordagem acolhedora e personalizada, respeitando a singularidade de cada pessoa e transformando sua relação com o dinheiro para fortalecer a autonomia, a liberdade de escolha e a construção da independência financeira.",
  },
  {
    icon: IconValores,
    alt: "Valores",
    label: "03",
    title: "VALORES",
    text: "Acreditamos que toda pessoa possui conhecimentos, experiências e valores capazes de transformar vidas. Por isso, cultivamos relações pautadas no respeito, na empatia, na responsabilidade, na simplicidade e na confiança.",
  },
];

function SobreNos() {
  return (
    <div className={styles["sobre-nos"]} id="proposito">
      <div className={styles.bgCircle1} aria-hidden="true" />
      <div className={styles.bgCircle2} aria-hidden="true" />

      <div className={styles["sobre-nos-container"]}>
        <div className={styles.introSection}>
          <img src={logoesticada} alt="Logo" className={styles.logoesticada} />

          <div className={styles.divider} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <p className={styles.introText}>
            Mais do que ensinar sobre finanças, ajudamos pessoas a compreender seus
            comportamentos, transformar hábitos e construir uma relação mais consciente
            com o dinheiro.
          </p>
          <p className={styles.introTextSecondary}>
            Nosso propósito é disseminar a Educação Financeira Comportamental por meio
            de uma abordagem multidisciplinar, reconhecendo o ser humano em sua
            integralidade — biológica, psicológica, social e espiritual. Acreditamos que a
            transformação da relação com o dinheiro acontece quando compreendemos a
            pessoa para além dos números, respeitando sua história, seus valores e seus
            comportamentos.
          </p>
        </div>

        <div className={styles.stackSection}>
          <ScrollStack itemStackDistance={35} stackPosition="15%" baseScale={0.94}>
            {cards.map(({ icon, alt, label, title, text }) => (
              <ScrollStackItem key={title}>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardLabel}>{label}</span>
                    <div className={styles.cardIconWrap}>
                      <img src={icon} alt={alt} className={styles.cardIcon} />
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <div className={styles.cardLine} aria-hidden="true" />
                    <p className={styles.cardText}>{text}</p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>

        <div className={styles.extraContent}>
          <div className={styles.extraInner}>
            <p className={styles.extraText}>
              Na Finanças sem Fronteira, acreditamos que a educação financeira vai muito
              além dos números. Ela é uma ferramenta de transformação humana, capaz de
              promover autonomia, bem-estar e qualidade de vida em todas as fases da vida.
            </p>
            <p className={styles.extraText}>
              Nosso trabalho é desenvolvido para fortalecer pessoas, famílias, organizações e
              comunidades, contribuindo para uma sociedade mais consciente, participativa e
              sustentável. Por meio da Educação Financeira Comportamental, ajudamos cada
              participante a compreender sua relação com o dinheiro, alinhar suas escolhas
              aos seus valores, objetivos e propósito de vida.
            </p>
            <p className={styles.extraText}>
              Nossa metodologia possui uma abordagem multidisciplinar, integrando
              conhecimentos da neurociência, do comportamento humano e da educação
              financeira para promover mudanças consistentes e duradouras.
              <br />
              <br />
              Acreditamos que transformar a relação com o dinheiro é transformar a forma
              como as pessoas vivem, planejam, sonham e constroem o futuro.
              <br />
              <br />
              Nosso compromisso é:
            </p>

            <ul className={styles.listaPropostas}>
              <li>
                <span className={styles.listaBullet} aria-hidden="true" />
                Desenvolver uma relação mais consciente, equilibrada e saudável com o
                dinheiro.
              </li>
              <li>
                <span className={styles.listaBullet} aria-hidden="true" />
                Transformar comportamentos financeiros por meio do conhecimento e da
                prática.
              </li>
              <li>
                <span className={styles.listaBullet} aria-hidden="true" />
                Fortalecer a autonomia para decisões financeiras mais responsáveis e
                alinhadas aos objetivos de vida.
              </li>
              <li>
                <span className={styles.listaBullet} aria-hidden="true" />
                Incentivar o diálogo sobre finanças entre diferentes gerações, promovendo
                aprendizado compartilhado.
              </li>
              <li>
                <span className={styles.listaBullet} aria-hidden="true" />
                Estimular crianças, jovens e adultos a desenvolverem hábitos financeiros
                conscientes desde cedo, valorizando o planejamento, a paciência e as
                escolhas responsáveis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;