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
        "Nos cursos e treinamentos são oferecidas dinâmicas e exercícios diversos que direcionam para a solução do descontrole financeiro, com foco no desenvolvimento de habilidades através de ferramentas que propiciam ao grupo a identificação individual e atual de seu perfil financeiro.",
      textosecundario: `Os cursos e treinamentos são direcionados para pessoas de qualquer idade ou atividade profissional, melhorando a percepção do valor do dinheiro e sua aplicabilidade no dia a dia. Liberdade de escolha.`,
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
