import React from "react";
import styles from "./SobreNos.module.css";
import logoesticada from "../../assets/icons/LogoEsticada.svg";
import ScrollStack, { ScrollStackItem } from "../scrollstack/ScrollStack";
import IconVisao from "../../assets/icons/olho.svg";
import IconMissao from "../../assets/icons/dart-mission-goal-success-svgrepo-com.svg";
import IconValores from "../../assets/icons/diamond-business-finance-svgrepo-com.svg";

function SobreNos() {
  return (
    <div className={styles["sobre-nos"]} id="proposito">
      <div className={styles["sobre-nos-container"]}>
        <div className={styles.introSection}>
          <img src={logoesticada} alt="Logo" className={styles.logoesticada} />
          <p className={styles.introText}>
            Somos uma empresa voltada para educação financeira comportamental e
            tem como objetivo enriquecer a relação das pessoas com o dinheiro.
            <br />
            Nosso propósito é disseminar a educação financeira comportamental
            oferecendo um tratamento multidisciplinar, com o intuito de ver o
            ser humano como biopsicossocioespiritual.
          </p>
        </div>

        <ScrollStack itemStackDistance={35} stackPosition="15%" baseScale={0.94}>
          <ScrollStackItem>
            <div className={styles.cardContent}>
              <img src={IconVisao} alt="Visão" className={styles.cardIcon} />
              <h2>VISÃO</h2>
              <p>
                Novos conceitos e valores através do exemplo, transmitindo o
                despertar da trajetória equilibrada para realização de sonhos ou
                metas.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className={styles.cardContent}>
              <img src={IconMissao} alt="Missão" className={styles.cardIcon} />
              <h2>MISSÃO</h2>
              <p>
                Respeitar cada indivíduo como único, norteando-o sobre a relação
                e utilização do dinheiro; auxiliando para a conquista da
                Independência Financeira.
              </p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className={styles.cardContent}>
              <img src={IconValores} alt="Valores" className={styles.cardIcon} />
              <h2>VALORES</h2>
              <p>
                Acreditamos que todas as pessoas são capazes de oferecer e
                entregar algo ao outro, através do respeito mútuo, da empatia,
                responsabilidade e simplicidade.
              </p>
            </div>
          </ScrollStackItem>
        </ScrollStack>

        <div className={styles.extraContent}>
          <p>
            O trabalho é desenvolvido como suporte para os diversos pilares
            sociais em direção a uma longevidade saudável financeiramente,
            propiciando uma vida de qualidade que se constitui ativa,
            participativa e colaborativa, num mundo possível em busca de
            sustentabilidade.
            <br />
            A educação financeira comportamental alinha-se com a busca de cada
            participante de seu propósito; manifestado pelos papéis
            desenvolvidos dentro da sociedade; objetivos e projetos de vida.
            <br />A Educação Financeira Comportamental, acessa as demais áreas
            do conhecimento a título de complementação, auxiliando diretamente
            nas decisões pessoais e peculiares de cada educando, tendo como
            proposta:
          </p>
          <ul className={styles.listaPropostas}>
            <li>
              Mudar os paradigmas de como as pessoas lidam com seus recursos
              financeiros nos diferentes momentos da vida;
            </li>
            <li>
              Contribuir com as pessoas para potencializar resultados do
              trabalho intergeracional, numa sociedade cada vez mais longeva e
              participativa;
            </li>
            <li>
              Incentivar a participação das crianças nas questões financeira
              familiar, ensinando-as a tomarem decisões mais assertivas,
              pontuando a compreensão e o valor do esperar, afastando o
              comportamento imediatista do “eu quero agora”.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;