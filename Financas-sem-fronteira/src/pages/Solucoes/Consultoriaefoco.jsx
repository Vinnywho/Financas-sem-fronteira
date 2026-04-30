import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Solucao from "../../components/solucao-page/Solucao";
import Contato from "../../components/contato/Contato";
import Footer from "../../components/footer/Footer";
import imagem from "../../assets/images/consul-financeira-480x480.webp";

function Consultoriaefoco() {
  const data = {
    titulo: "Consultoria e Foco",
    textoprimario:
      "O trabalho desenvolvido proporciona uma vida de qualidade que se constitui ativa, participativa e colaborativa, num mundo possível em busca de sustentabilidade.",
    textosecundario: `Nossas ações perpassam pela transformação estruturada com a eficácia da Educação Financeira Comportamental:

    – Informação e Conhecimento;
    – Saúde e Bem-estar;
    – Protagonismo e Realização;
    – Liberdade.

    O atendimento é direcionado à pessoa de qualquer idade ou atividade profissional, melhorando a percepção do valor do dinheiro e sua aplicabilidade no dia a dia. Liberdade de escolha.`,
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

export default Consultoriaefoco;
