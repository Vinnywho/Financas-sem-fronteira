import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/icons/Logo.svg";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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
        <HashLink to="/#home" className={styles.logo} onClick={closeAll}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </HashLink>

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
            <HashLink smooth to="/#home" className={styles.navItem} onClick={closeAll}>
              HOME
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#proposito" className={styles.navItem} onClick={closeAll}>
              PROPÓSITO
            </HashLink>
          </li>

          <li 
            className={styles.dropdownContainer}
            onMouseEnter={() => window.innerWidth > 1024 && setShowDropdown(true)}
            onMouseLeave={() => window.innerWidth > 1024 && setShowDropdown(false)}
            onClick={toggleDropdown}
          >
            <HashLink smooth to="/#solucoes" className={styles.navItem}>
              SOLUÇÕES <span className={`${styles.caret} ${showDropdown ? styles.rotate : ""}`}>▾</span>
            </HashLink>
            
            <ul className={`${styles.dropdownMenu} ${showDropdown ? styles.show : ""}`}>
              <li><HashLink smooth to="/#afinco" onClick={closeAll}>CONSULTORIA E FOCO</HashLink></li>
              <li><HashLink smooth to="/#cursos" onClick={closeAll}>FORMAÇÕES E CURSOS</HashLink></li>
              <li><HashLink smooth to="/#palestras" onClick={closeAll}>WORKSHOPS E OFICINAS</HashLink></li>
              <li><HashLink smooth to="/#roda" onClick={closeAll}>MENTORIA EM GRUPO</HashLink></li>
            </ul>
          </li>

          <li>
            <HashLink smooth to="/#blog" className={styles.navItem} onClick={closeAll}>
              BLOG
            </HashLink>
          </li>
        </ul>

        <div className={styles.navActions}>
          <HashLink smooth to="/#contato" onClick={closeAll}>
            <button className={styles.contatoBtn}>
              ENTRE EM CONTATO <span className={styles.seta}>→</span>
            </button>
          </HashLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;