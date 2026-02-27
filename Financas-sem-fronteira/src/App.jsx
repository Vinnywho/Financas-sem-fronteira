import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Solucoes from "./components/solucoes/Solucoes.jsx";
import Blog from "./components/Blog-outro/Blog.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Solucoes />
        <Blog />
        <Footer />
    </>
  );
}

export default App;
