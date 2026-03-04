import React from 'react'
import Navbar from "../components/navbar/Navbar.jsx";
import Home from "../components/home/Home.jsx";
import Solucoes from "../components/solucoes/Solucoes.jsx";
import Blog from "../components/blog-outro/Blog.jsx";
import Proposito from "../components/proposito/Proposito.jsx";
import Contato from "../components/contato/Contato.jsx";
import Footer from "../components/footer/Footer.jsx";


function Inicio() {
  return (
    <div>
        <Navbar />
        <Home />
        <Proposito/>
        <Solucoes />
        <Blog />
        <Contato />
        <Footer />
    </div>
  )
}

export default Inicio
