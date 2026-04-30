import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Solucao from "../../components/solucao-page/Solucao";
import Contato from "../../components/contato/Contato";
import Footer from "../../components/footer/Footer";
import imagem from "../../assets/images/palestras-e-treinamentos-1-480x480.webp";

function Workshops() {
  const data = {
    titulo: "Workshops e oficinas",
    textoprimario:
      "A roda de conversa é uma nobre e efetiva contribuição da Educação Financeira Comportamental.",
    textosecundario: `A roda de conversa tem como finalidade proporcionar, em um ambiente seguro e intimista, o acolhimento à fala de cada participante contribuindo efetivamente com seu depoimento, sua história e sua opinião dentro do contexto de finanças, mediado pela educadora financeira. Todos falam e todos escutam.`,
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
