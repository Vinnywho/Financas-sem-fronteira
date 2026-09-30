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
import Login from "../pages/login/Login.jsx";
import BlogAdmin from "../pages/blog-write/BlogWrite.jsx";
import PostDetail from "../pages/post-detail/PostDetail.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import ConversaReconhecimento from "../pages/ConversaReconhecimento/ConversaReconhecimento.jsx";
import WhatsAppButton from "../components/whatsapp-button/WhatsAppButton.jsx";

function Rotas() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/blog-janina" element={<BlogJanina />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/consultoria-e-foco" element={<Consultoriaefoco />} />
          <Route path="/formacoes-e-cursos" element={<Formaçoesecursos />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/conversa-de-reconhecimento" element={<ConversaReconhecimento />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/blog-admin" 
            element={
              <ProtectedRoute>
                <BlogAdmin />
              </ProtectedRoute>
            } 
          />
          <Route path="/blog/post/:id" element={<PostDetail />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default Rotas;