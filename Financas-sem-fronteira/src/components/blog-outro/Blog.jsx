import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import ProjectCard from './ProjectCard';
import Card from '../card-blog-janina/Card';
import { projetosLista } from '../../data/artigos';
import aos from "aos";
import "aos/dist/aos.css";

function Blog() {
  React.useEffect(() => {
    aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  const listaInvertida = [...projetosLista].reverse();
  const [artigoPrincipal, ...outrosArtigos] = listaInvertida;

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
              title={artigoPrincipal.title}
              desc={artigoPrincipal.desc}
              bgImage={artigoPrincipal.bgImage}
              tipo={artigoPrincipal.tipo}
            />
          </div>
        )}

        <div className={styles['grid-blog']}>
          {outrosArtigos.slice(0, 3).map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              desc={proj.desc}
              bgImage={proj.bgImage}
              tipo={proj.tipo}
              autor={proj.autor}
              autorImg={proj.autorImg}
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