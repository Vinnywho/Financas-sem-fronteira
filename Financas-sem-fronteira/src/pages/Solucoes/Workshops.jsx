import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Solucao from "../../components/solucao-page/Solucao";
import Contato from "../../components/contato/Contato";
import Footer from "../../components/footer/Footer";
import imagem from "../../assets/images/palestras-e-treinamentos-1-480x480.webp";

function Workshops() {
  const data = {
    titulo: " Roda de conversa, Workshops e oficinas",
    textoprimario:
      "Rodas de conversa, workshops e oficinas são experiências desenvolvidas para promover a Educação Financeira Comportamental de forma prática, participativa e acolhedora.",
    textosecundario: `Criamos um ambiente seguro e acolhedor para que cada participante possa refletir, compartilhar experiências e aprender sem julgamentos. Com mediação especializada, promovemos diálogos respeitosos que valorizam diferentes perspectivas e fortalecem a construção de uma relação mais consciente com o dinheiro. 
    Acreditamos que a verdadeira transformação acontece quando as pessoas se sentem ouvidas, respeitadas e protagonistas da própria história.`,
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

export default Workshops;
