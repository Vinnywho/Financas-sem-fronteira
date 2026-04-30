import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Solucao from "../../components/solucao-page/Solucao";
import Contato from "../../components/contato/Contato";
import Footer from "../../components/footer/Footer";
import imagem from "../../assets/images/rodadeconversa-1-480x480.webp";

function Mentoria() {
  const data = {
    titulo: "Mentoria em grupo",
    textoprimario:
      "Atividades voltadas às empresas, Instituições, Órgãos Públicos, Associações, Sindicatos, ONGs, Grupos Comunitários e afins.",
    textosecundario: `Palestras e oficinas personalizadas favorecem acolhimento diverso no qual cada ouvinte se sente integrado ao ambiente em que está inserido. O trabalho é desenvolvido, direcionado e ministrado às necessidades de seus colaboradores, funcionários e parceiros. O bem estar financeiro contribui para o aumento da produtividade e a valorização da atividade profissional desenvolvida.`,
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
