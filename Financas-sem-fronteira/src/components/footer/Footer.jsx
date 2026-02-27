import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <a href="#home" className="scroll-top">
          <svg
            width="58"
            height="62"
            viewBox="0 0 58 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.95188e-06 29.0472V19.7055L28.4631 0.000272558L57.2181 19.7055V29.0472L28.4631 10.2178L4.95188e-06 29.0472ZM24.2301 61.8892V8.17428H32.842V61.8892H24.2301Z"
              fill="white"
            />
          </svg>
        </a>
        <div id="contatos">
          <a
            href="https://instagram.com/vinny.who"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:vivini13235@gmail.com">Email</a>
          <a
            href="https://linkedin.com/in/vinicius-cardoso-de-lima-a9a918227/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Vinnywho"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <p>&copy; 2026 - <b>Finanças sem fronteira</b>. Todos os direitos reservados</p>
        <p>
            Desenvolvido por <a href="https://linkedin.com/in/vinicius-cardoso-de-lima-a9a918227/" target="_blank" rel="noreferrer"><b>Vinicius Cardoso de Lima</b></a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
