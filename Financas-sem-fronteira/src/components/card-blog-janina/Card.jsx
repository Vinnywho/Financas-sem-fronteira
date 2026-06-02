import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import aos from "aos";
import "aos/dist/aos.css";

function Card({ id, title, desc, bgImage, tipo, data }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={styles.aosWrapper} data-aos="fade-up">
      <div className={styles["projeto-principal"]} onClick={() => navigate(`/blog/post/${id}`)}>
        <img src={bgImage} alt={title} />
        <div className={styles["projeto-principal-texto"]}>
          <span>{Array.isArray(tipo) ? tipo.join(", ") : tipo}</span>
          <h3>{title}</h3>
          <p>{data || new Date().toLocaleDateString('pt-BR')}</p>
          <div 
            className={styles.descContainer}
            dangerouslySetInnerHTML={{ __html: desc }} 
          />
          <button className={styles["btn-blog-principal"]}>Saiba mais</button>
        </div>
      </div>
    </div>
  );
}

export default Card;