import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Inicio from "../pages/Inicio.jsx";
import BlogJanina from "../pages/BlogJanina.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function Rotas() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/blog-janina" element={<BlogJanina />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default Rotas;
