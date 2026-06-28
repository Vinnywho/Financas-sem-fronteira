import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Solucao from "../../components/solucao-page/Solucao";
import Contato from "../../components/contato/Contato";
import Footer from "../../components/footer/Footer";
import imagem from "../../assets/images/cursos-e-treinamentos-1-480x480.webp";

function Formaçoesecursos() {
  const data = {
    titulo: "Formações e Cursos",
    textoprimario:
      "Com uma metodologia prática e baseada na Educação Financeira Comportamental, nossos cursos unem dinâmicas, exercícios e ferramentas que permitem a cada participante identificar seu perfil financeiro, compreender seus comportamentos em relação ao dinheiro e desenvolver habilidades para conquistar mais equilíbrio e autonomia financeira.",
    textosecundario: (
      <>
        Cada pessoa aprende de um jeito. Por isso, nossos cursos são personalizados. Com uma abordagem acolhedora e fundamentada na neurociência e na Educação Financeira Comportamental, ajudamos pessoas de diferentes realidades a desenvolver uma relação mais consciente com o dinheiro e a fazer escolhas financeiras com mais segurança.
        <br /><br />
        Mais conhecimento. Mais consciência. Mais liberdade de escolha.
        <br /><br />
        Link para cursos online:
        <br />
        <a
          href="https://go.hotmart.com/P105271949T"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "underline" }}
        >
          <strong>Dinheiro Consciente: organize sua vida financeira na prática</strong>
        </a>
      </>
    ),
    imagem: imagem,
  };
  return (
    <div>
      <Navbar isOtherPage={true} />
      <Solucao
        titulo={data.titulo}
        textoprimario={data.textoprimario}
        textosecundario={data.textosecundario}
        imagem={data.imagem}
      />
      <Contato />
      <Footer />
    </div>
  );
}

export default Formaçoesecursos;
