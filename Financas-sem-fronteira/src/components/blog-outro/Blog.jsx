import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import ProjectCard from './ProjectCard';
import Card from '../card-blog-janina/Card';
import aos from "aos";
import "aos/dist/aos.css";
import { supabase } from '../../services/supabase';
import janina from '../../assets/images/JaninaJanino.png'

function Blog() {
  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    aos.init({
      duration: 1000,
      once: true
    });
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('id, titulo, conteudo_html, criado_em, data_postagem, capa_url, categorias')
        .order('data_postagem', { ascending: false });

      if (error) throw error;

      const artigosMapeados = (data || []).map((artigo) => {
        const dataExibicao = artigo.data_postagem
          ? new Date(artigo.data_postagem + "T00:00:00")
          : new Date(artigo.criado_em);

        return {
          id: artigo.id,
          title: artigo.titulo,
          desc: artigo.conteudo_html,
          bgImage: artigo.capa_url || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600",
          tipo: artigo.categorias && artigo.categorias.length > 0 ? artigo.categorias : ["Dicas"],
          data: dataExibicao.toLocaleDateString("pt-BR"),
        };
      });

      setArtigos(artigosMapeados);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className={styles.blog} style={{ minHeight: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Carregando...</div>;
  }

  const [artigoPrincipal, ...outrosArtigos] = artigos;

  return (
    <div className={styles.blog}>
      <section className={styles['blog-container']} id="blog">
        <h1 data-aos="zoom-in" data-aos-delay="100">BLOG</h1>
        <p className={styles['descricao-blog']} data-aos="fade-up" data-aos-delay="300">
          Descubra como podemos impulsionar seu crescimento.
        </p>

        {artigoPrincipal && (
          <div className={styles.destaqueWrapper}>
            <Card 
              id={artigoPrincipal.id}
              title={artigoPrincipal.title}
              desc={artigoPrincipal.desc}
              bgImage={artigoPrincipal.bgImage}
              tipo={artigoPrincipal.tipo}
              data={artigoPrincipal.data}
            />
          </div>
        )}

        <div className={styles['grid-blog']}>
          {outrosArtigos.slice(0, 3).map((proj, index) => (
            <ProjectCard
              id={proj.id}
              key={proj.id || index}
              title={proj.title}
              desc={proj.desc}
              bgImage={proj.bgImage}
              tipo={proj.tipo}
              autor="Janina"
              autorImg={janina}
              data={proj.data}
            />
          ))}
        </div>

        <Link to="/blog-janina" className={styles['btn-blog-todos']}>
          Ver todos os posts
        </Link>
      </section>
    </div>
  );
}

export default Blog;