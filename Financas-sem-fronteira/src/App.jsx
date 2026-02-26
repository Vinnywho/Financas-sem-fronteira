import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./components/home/Home.jsx";
import Solucoes from "./components/solucoes/Solucoes.jsx";
import Blog from "./components/Blog/Blog.jsx";

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Solucoes />
        <Blog />
    </>
  );
}

export default App;
