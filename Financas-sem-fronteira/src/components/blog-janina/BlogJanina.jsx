import React, { useState } from "react";
import Card from "../card-blog-janina/Card";
import styles from "./BlogJanina.module.css";
import { projetosLista } from "../../data/artigos";
import aos from "aos";
import "aos/dist/aos.css";
import Lupa from "../../assets/icons/search.svg";

function BlogJanina() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");

  React.useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categorias = ["Todas", "Dicas", "Investimento", "Carreira", "Economia"];

  const listaInvertida = [...projetosLista].reverse();

  const artigosFiltrados = listaInvertida.filter((artigo) => {
    const matchesBusca = 
      artigo.title.toLowerCase().includes(busca.toLowerCase()) ||
      artigo.desc.toLowerCase().includes(busca.toLowerCase());
    
    const matchesCategoria = 
      categoriaAtiva === "Todas" || artigo.tipo.includes(categoriaAtiva);

    return matchesBusca && matchesCategoria;
  });

  return (
    <div className={styles["blog"]}>
      <div className={styles["blog-container"]}>
        <div className={styles["titulo-e-pesquisa"]}>
          <h1 data-aos="zoom-in" data-aos-delay="100">
            BLOG DA JANINA
          </h1>
          <div
            className={styles.searchContainer}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <img src={Lupa} alt="Lupa" className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Pesquisar..."
              className={styles.searchInput}
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
        </div>

        <div className={styles["categorias"]} data-aos="zoom-in" data-aos-delay="500">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`${styles["categoria-btn"]} ${categoriaAtiva === cat ? styles.active : ""}`}
              onClick={() => setCategoriaAtiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {artigosFiltrados.length > 0 ? (
          artigosFiltrados.map((artigo, index) => (
            <Card 
              key={index}
              title={artigo.title}
              desc={artigo.desc}
              bgImage={artigo.bgImage}
              tipo={artigo.tipo}
              data={artigo.data}
            />
          ))
        ) : (
          <p className={styles.noResults}>Nenhum artigo encontrado.</p>
        )}
      </div>
    </div>
  );
}

export default BlogJanina;