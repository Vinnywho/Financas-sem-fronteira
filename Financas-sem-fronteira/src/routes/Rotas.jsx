import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Inicio from "../pages/Inicio.jsx";

function Rotas() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default Rotas;
