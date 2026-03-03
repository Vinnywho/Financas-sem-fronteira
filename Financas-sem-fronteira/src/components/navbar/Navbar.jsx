import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/icons/Logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Logo" className={styles.logo}/>

      <button className={`${styles.burger} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`${styles.navUl} ${isOpen ? styles.active : ''}`}>
        <li><a href="#home" className={styles.navItem} onClick={() => setIsOpen(false)}>HOME</a></li>
        <li><a href="#solucoes" className={styles.navItem} onClick={() => setIsOpen(false)}>SOLUÇÕES</a></li>
        <li><a href="#blog" className={styles.navItem} onClick={() => setIsOpen(false)}>BLOG</a></li>
        <li><a href="#galeria" className={styles.navItem} onClick={() => setIsOpen(false)}>GALERIA</a></li>
        <li><a href="#depoimentos" className={styles.navItem} onClick={() => setIsOpen(false)}>DEPOIMENTOS</a></li>
      </ul>

      <div className={styles.navActions}>
        <button className={styles.contatoBtn}>ENTRE EM CONTATO <span className={styles.seta}>→</span></button>
      </div>
    </nav>
  );
};

export default Navbar;