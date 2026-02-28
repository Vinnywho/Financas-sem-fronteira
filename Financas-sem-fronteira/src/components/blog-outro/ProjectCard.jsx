import React from 'react';
import styles from './Blog.module.css';

const ProjectCard = ({ title, desc, bgImage, tipo, autor, autorImg, data }) => (
  <div className={styles['blog-card']}>
    <img src={bgImage} alt={title} />
    <span className={styles.tipo}>{tipo}</span>
    <h3>{title}</h3>
    <p>{desc}</p>
    
    <div className={styles.autor}>
      <img src={autorImg} alt={autor} />
      <div>
        <span className={styles['autor-nome']}>{autor}</span>
        <span>{data}</span>
      </div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.setinha}
      >
        <path
          d="M1 11L11 1M11 1H1M11 1V11"
          stroke="#101828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

export default ProjectCard;