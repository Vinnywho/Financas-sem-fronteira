import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/icons/Logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
        <img src={logo} alt="Logo" className='logo'/>
      <ul className={isOpen ? 'active' : ''}>
        <li><a href="#home" className="nav-item" onClick={() => setIsOpen(false)}>HOME</a></li>
        <li><a href="#solucoes" className="nav-item" onClick={() => setIsOpen(false)}>SOLUÇÕES</a></li>
        <li><a href="#blog" className="nav-item" onClick={() => setIsOpen(false)}>BLOG</a></li>
        <li><a href="#galeria" className="nav-item" onClick={() => setIsOpen(false)}>GALERIA</a></li>
        <li><a href="#depoimentos" className="nav-item" onClick={() => setIsOpen(false)}>DEPOIMENTOS</a></li>
      </ul>

      <div className="nav-actions">
        <button className="contato-btn">ENTRE EM CONTATO <span className='seta'>→</span></button>
        {/* <button className={`burger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span><span></span><span></span>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;