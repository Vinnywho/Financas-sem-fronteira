import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/icons/Logo.svg";
import { Link } from 'react-router-dom';

const Navbar = ({ isOtherPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const closeAll = () => {
    setIsOpen(false);
    setShowDropdown(false);
  };

  const toggleDropdown = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setShowDropdown(!showDropdown);
    }
  };

  return (
    <div className={`${styles.navContainer} ${isOtherPage ? styles.otherNavbar : ""}`}>
      <nav className={styles.nav}>
        <Link to="/" href="#home" className={styles.logo}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        <button
          className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navUl} ${isOpen ? styles.active : ""}`}>
          <li>
            <a href="#home" className={styles.navItem} onClick={closeAll}>
              HOME
            </a>
          </li>
          <li>
            <a href="#proposito" className={styles.navItem} onClick={closeAll}>
              PROPÓSITO
            </a>
          </li>

          <li 
            className={styles.dropdownContainer}
            onMouseEnter={() => window.innerWidth > 1024 && setShowDropdown(true)}
            onMouseLeave={() => window.innerWidth > 1024 && setShowDropdown(false)}
            onClick={toggleDropdown}
          >
            <a href="#solucoes" className={styles.navItem}>
              SOLUÇÕES <span className={`${styles.caret} ${showDropdown ? styles.rotate : ""}`}>▾</span>
            </a>
            
            <ul className={`${styles.dropdownMenu} ${showDropdown ? styles.show : ""}`}>
              <li><a href="#afinco" onClick={closeAll}>CONSULTORIA E FOCO</a></li>
              <li><a href="#cursos" onClick={closeAll}>FORMAÇÕES E CURSOS</a></li>
              <li><a href="#palestras" onClick={closeAll}>WORKSHOPS E OFICINAS</a></li>
              <li><a href="#roda" onClick={closeAll}>MENTORIA EM GRUPO</a></li>
            </ul>
          </li>

          <li>
            <a href="#blog" className={styles.navItem} onClick={closeAll}>
              BLOG
            </a>
          </li>
        </ul>

        <div className={styles.navActions}>
          <a href="#contato">
            <button className={styles.contatoBtn}>
              ENTRE EM CONTATO <span className={styles.seta}>→</span>
            </button>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;