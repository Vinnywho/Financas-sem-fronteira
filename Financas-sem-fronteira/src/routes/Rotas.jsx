import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Inicio from "../pages/Inicio.jsx";
import BlogJanina from "../pages/BlogJanina.jsx";
import SobreNos from "../pages/SobreNosPage.jsx";
import Consultoriaefoco from "../pages/Solucoes/Consultoriaefoco.jsx";
import Formaçoesecursos from "../pages/Solucoes/Formaçoesecursos.jsx";
import Workshops from "../pages/Solucoes/Workshops.jsx";
import Mentoria from "../pages/Solucoes/Mentoria.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Rotas() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/blog-janina" element={<BlogJanina />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/consultoria-e-foco" element={<Consultoriaefoco />} />
          <Route path="/formacoes-e-cursos" element={<Formaçoesecursos />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/mentoria" element={<Mentoria />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default Rotas;
