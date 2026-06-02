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
    text: "Novos conceitos e valores através do exemplo, transmitindo o despertar da trajetória equilibrada para realização de sonhos ou metas.",
  },
  {
    icon: IconMissao,
    alt: "Missão",
    label: "02",
    title: "MISSÃO",
    text: "Respeitar cada indivíduo como único, norteando-o sobre a relação e utilização do dinheiro; auxiliando para a conquista da Independência Financeira.",
  },
  {
    icon: IconValores,
    alt: "Valores",
    label: "03",
    title: "VALORES",
    text: "Acreditamos que todas as pessoas são capazes de oferecer e entregar algo ao outro, através do respeito mútuo, da empatia, responsabilidade e simplicidade.",
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
            Somos uma empresa voltada para educação financeira comportamental e
            tem como objetivo enriquecer a relação das pessoas com o dinheiro.
          </p>
          <p className={styles.introTextSecondary}>
            Nosso propósito é disseminar a educação financeira comportamental
            oferecendo um tratamento multidisciplinar, com o intuito de ver o
            ser humano como biopsicossocioespiritual.
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
              O trabalho é desenvolvido como suporte para os diversos pilares
              sociais em direção a uma longevidade saudável financeiramente,
              propiciando uma vida de qualidade que se constitui ativa,
              participativa e colaborativa, num mundo possível em busca de
              sustentabilidade.
            </p>
            <p className={styles.extraText}>
              A educação financeira comportamental alinha-se com a busca de
              cada participante de seu propósito; manifestado pelos papéis
              desenvolvidos dentro da sociedade; objetivos e projetos de vida.
            </p>
            <p className={styles.extraText}>
              A Educação Financeira Comportamental acessa as demais áreas do
              conhecimento a título de complementação, auxiliando diretamente
              nas decisões pessoais e peculiares de cada educando, tendo como
              proposta:
            </p>

            <ul className={styles.listaPropostas}>
              <li>
                <span className={styles.listaBullet} aria-hidden="true" />
                Mudar os paradigmas de como as pessoas lidam with seus recursos
                financeiros nos diferentes momentos da vida;
              </li>
              <li>
                <span className={styles.listaBullet} aria-hidden="true" />
                Contribuir com as pessoas para potencializar resultados do
                trabalho intergeracional, numa sociedade cada vez mais longeva
                e participativa;
              </li>
              <li>
                <span className={styles.listaBullet} aria-hidden="true" />
                Incentivar a participação das crianças nas questões financeiras
                familiares, ensinando-as a tomarem decisões mais assertivas,
                pontuando a compreensão e o valor do esperar, afastando o
                comportamento imediatista do "eu quero agora".
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;