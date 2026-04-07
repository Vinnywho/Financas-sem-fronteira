import React from 'react'
import Navbar from "../components/navbar/Navbar";
import SobreNosSection from "../components/sobrenos/SobreNos";
import Contato from "../components/contato/Contato";
import Footer from "../components/footer/Footer";

function SobreNos() {
  return (
    <div >
        <Navbar isOtherPage={true}/>
        <SobreNosSection />
        <Contato />
        <Footer />
    </div>
  )
}

export default SobreNos
