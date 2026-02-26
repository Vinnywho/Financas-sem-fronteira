import React from "react";
import "./Solucoes.css";
import consultoria from "../../assets/icons/Consultoria.svg";
import formacao from "../../assets/icons/Cursos.svg";
import mentoria from "../../assets/icons/Mentoria.svg";
import workshop from "../../assets/icons/Workshops.svg";


function Servicos() {
  return (
    <section className="solucoes" id="solucoes">
      <div className="container-solucoes">
        <div className="solucoes-info">
          <h2 className="solucoes-titulo">
            NOSSAS <span className="destaque-solucoes">SOLUÇÕES</span>
          </h2>
          <p className="solucoes-descricao">
            Descubra como podemos transformar sua relação com o dinheiro
            impulsionar sua saúde financeira.
          </p>
        </div>
      
        <div className="solucoes-cards">
          <div className="solucoes-card card-1">
            <img src={consultoria} className="solucoes-img" alt="" />
            <h3 className="solucoes-card-titulo">CONSULTORIA E FOCO</h3>
          </div>

          <div className="solucoes-card card-2">
            <img src={formacao} className="solucoes-img" alt="" />
            <h3 className="solucoes-card-titulo">FORMAÇÕES E CURSOS</h3>
          </div>

          <div className="solucoes-card card-3">
            <img src={workshop} className="solucoes-img" alt="" />
            <h3 className="solucoes-card-titulo">WORKSHOPS E OFICINAS</h3>
          </div>

          <div className="solucoes-card card-4">
            <img src={mentoria} className="solucoes-img" alt="" />
            <h3 className="solucoes-card-titulo">MENTORIA EM GRUPO</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
  
export default Servicos;
