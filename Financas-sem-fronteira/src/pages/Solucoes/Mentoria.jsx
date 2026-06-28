import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Solucao from "../../components/solucao-page/Solucao";
import Contato from "../../components/contato/Contato";
import Footer from "../../components/footer/Footer";
import imagem from "../../assets/images/rodadeconversa-1-480x480.webp";

function Mentoria() {
  const data = {
    titulo: "Outras atividades",
    textoprimario:
      "Nossas palestras, oficinas e mentorias são desenvolvidas de forma personalizada, considerando as necessidades e objetivos de cada contratante. Não utilizamos conteúdos prontos ou padronizados, pois acreditamos que cada público possui desafios e realidades específicas.",
    textosecundario: `Por meio da Educação Financeira Comportamental, promovemos conhecimento, bem-estar financeiro e maior qualidade de vida para colaboradores, parceiros e equipes. Mais do que um custo, esse trabalho representa um investimento que contribui para o aumento da produtividade, do engajamento e da valorização profissional.`,
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

export default Mentoria;
