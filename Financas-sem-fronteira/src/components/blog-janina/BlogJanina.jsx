import React, { useState, useEffect } from "react";
import Card from "../card-blog-janina/Card";
import styles from "./BlogJanina.module.css";
import aos from "aos";
import "aos/dist/aos.css";
import Lupa from "../../assets/icons/search.svg";
import { supabase } from "../../services/supabase";

function BlogJanina() {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas");
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
    fetchArtigos();
  }, []);

  const fetchArtigos = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select(
          "id, titulo, conteudo_html, criado_em, data_postagem, capa_url, categorias",
        )
        .eq("publicado", true)
        .order("data_postagem", { ascending: false });

      if (error) throw error;

      const artigosMapeados = data.map((artigo) => {
        const dataExibicao = artigo.data_postagem
          ? new Date(artigo.data_postagem + "T00:00:00")
          : new Date(artigo.criado_em);

        return {
          id: artigo.id,
          title: artigo.titulo,
          desc: artigo.conteudo_html,
          bgImage:
            artigo.capa_url ||
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600",
          tipo:
            artigo.categorias && artigo.categorias.length > 0
              ? artigo.categorias
              : ["Dicas"],
          data: dataExibicao.toLocaleDateString("pt-BR"),
        };
      });

      setArtigos(artigosMapeados);
    } catch (error) {
      console.error(error);
    }
  };

  const categories = ["Todas", "Dicas", "Investimento", "Carreira", "Economia"];

  const artigosFiltrados = artigos.filter((artigo) => {
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

        <div
          className={styles["categorias"]}
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles["categoria-btn"]} ${categoriaAtiva === cat ? styles.active : ""}`}
              onClick={() => setCategoriaAtiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {artigosFiltrados.map((artigo) => (
          <Card
            key={artigo.id}
            id={artigo.id}
            title={artigo.title}
            desc={artigo.desc}
            bgImage={artigo.bgImage}
            tipo={artigo.tipo}
            data={artigo.data}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogJanina;