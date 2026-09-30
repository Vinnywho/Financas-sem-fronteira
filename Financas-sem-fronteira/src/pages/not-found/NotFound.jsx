import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar isOtherPage={true} />
      
      <main className={styles.mainContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Página não encontrada</h2>
          <p className={styles.description}>
            A página que você está procurando pode ter sido removida, mudou de nome 
            ou está temporariamente indisponível.
          </p>
          
          <div className={styles.actions}>
            <Link to="/" className={`${styles.btn} ${styles.btnGold}`}>
              VOLTAR PARA A HOME
            </Link>
            <Link to="/conversa-de-reconhecimento" className={`${styles.btn} ${styles.btnOutline}`}>
              AGENDAR CONVERSA
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
