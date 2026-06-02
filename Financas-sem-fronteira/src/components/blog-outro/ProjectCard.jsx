import React from "react";
import styles from "./Blog.module.css";
import { useNavigate } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";

function ProjectCard({id, title, desc, bgImage, tipo, autor, autorImg, data }) {
  const navigate = useNavigate();
  React.useEffect(() => {
    aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="100">
      <div className={styles["blog-card"]} onClick={() => navigate(`/blog/post/${id}`)}>
        <img src={bgImage} alt={title} />
        <span className={styles.tipo}>
          {Array.isArray(tipo) ? tipo.join(", ") : tipo}
        </span>
        <h3>{title}</h3>
        <div 
          className={styles["blog-card-desc"]}
          dangerouslySetInnerHTML={{ __html: desc }} 
        />

        <div className={styles.autor}>
          <img src={autorImg} alt={autor} />
          <div>
            <span className={styles["autor-nome"]}>{autor}</span>
            <span>{data}</span>
          </div>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.setinha}>
            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;