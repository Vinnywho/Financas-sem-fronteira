import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import Contato from "../../components/contato/Contato";
import Footer from "../../components/footer/Footer";
import styles from "./PostDetail.module.css";
import { supabase } from "../../services/supabase";
import aos from "aos";
import "aos/dist/aos.css";

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select(
          "id, titulo, conteudo_html, criado_em, data_postagem, capa_url, categorias",
        )
        .eq("id", id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error(error);
      navigate("/blog");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <Navbar isOtherPage={true} />

      <article className={styles.articleContainer}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          ← Voltar para o Blog
        </button>

        {post.capa_url && (
          <div className={styles.coverWrapper} data-aos="fade-down">
            <img
              src={post.capa_url}
              alt={post.titulo}
              className={styles.coverImage}
            />
          </div>
        )}

        <div
          className={styles.metaContainer}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className={styles.categories}>
            {post.categorias?.map((cat) => (
              <span key={cat} className={styles.categoryBadge}>
                {cat}
              </span>
            ))}
          </div>
          <p className={styles.date}>
            Publicado em{" "}
            {post.data_postagem
              ? new Date(post.data_postagem + "T00:00:00").toLocaleDateString(
                  "pt-BR",
                )
              : new Date(post.criado_em).toLocaleDateString("pt-BR")}
          </p>
        </div>

        <h1 className={styles.title} data-aos="fade-up" data-aos-delay="200">
          {post.titulo}
        </h1>

        <hr
          className={styles.divider}
          data-aos="fade-up"
          data-aos-delay="250"
        />

        <div
          className={styles.htmlContent}
          dangerouslySetInnerHTML={{ __html: post.conteudo_html }}
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </article>

      <hr className={styles.divider} data-aos="fade-up" data-aos-delay="250" />

      <section className={styles.ctaBanner} data-aos="fade-up" data-aos-delay="300">
        <div className={styles.ctaContent}>
          <h3 className={styles.ctaTitle}>
            Se identificou com este conteúdo?
          </h3>
          <p className={styles.ctaText}>
            A Conversa de Reconhecimento é um encontro de 30 minutos para conhecer
            nossa abordagem, sem julgamento e sem compromisso. Um primeiro passo
            para quem quer entender melhor sua relação com o dinheiro.
          </p>
          <Link
            to={`/conversa-de-reconhecimento?origem=post&ref=${encodeURIComponent(post?.titulo || "")}`}
            className={styles.ctaButton}
          >
            QUERO CONHECER A CONVERSA DE RECONHECIMENTO →
          </Link>
        </div>
      </section>

      <Contato />
      <Footer />
    </div>
  );
}

export default PostDetail;
