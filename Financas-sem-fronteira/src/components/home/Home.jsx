import React from "react";
import "./Home.css";
import janina from "../../assets/images/Janina.png";

function Home() {
  return (
    <div className="home-container">
      <div className="background-container">
        <div className="circulo circulo-1"></div>
        <div className="circulo circulo-2"></div>
      </div>

      <section id="home">
        <div id="infos">
          <h1>
            CONSTRUA SEU <span className="destaque">LEGADO</span> FINANCEIRO
          </h1>
          <p>
            <b>FINANÇAS SEM FRONTEIRA</b> é uma empresa voltada para educação
            financeira comportamental e tem como objetivo enriquecer a relação
            das pessoas com o dinheiro. Nosso propósito é disseminar a educação
            financeira comportamental oferecendo um tratamento multidisciplinar,
            com o intuito de ver o ser humano como biopsicossocioespiritual.
          </p>
          <div className="botoes-home">
            <button className="consultoria-btn">Consultoria</button>
            <button className="planos-btn">Conheça os planos</button>
          </div>
        </div>
        <div className="janina-wrapper">
          <img id="janina" src={janina} alt="Janina" />
          
          <div className="card card-pos-1">
            <div className="flex-container">
              <div className="texto-box">
                <p className="frase">Transmitindo o despertar da trajetória equilibrada que realiza sonhos</p>
              </div>
            </div>
          </div>

          <div className="card card-pos-2">
            <div className="flex-container">
              <div className="texto-box">
                <p className="frase">Mudando conceitos e valores através do exemplo</p>
              </div>
            </div>
          </div>

          <div className="card card-pos-3">
            <div className="flex-container">
              <div className="texto-box">
                <p className="frase">Despertar a reflexão com relação a utilização do dinheiro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
