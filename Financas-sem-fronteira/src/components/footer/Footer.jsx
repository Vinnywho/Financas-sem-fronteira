import React from "react";
import styles from "./Footer.module.css";

const links = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/financassemfronteira/",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:contato@financassemfronteira.com.br",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/financas-sem-fronteira/",
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?l=pt_BR&phone=5511998643125",
    external: true,
  },
];

function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      {/* Decorative top border line */}
      <div className={styles.topBorder} aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className={styles.inner}>
        {/* Brand block */}
        <div className={styles.brand}>
          <p className={styles.brandName}>Finanças<br />sem Fronteira</p>
          <p className={styles.brandTagline}>
            Educação financeira comportamental
          </p>
        </div>

        {/* Nav links */}
        <nav className={styles.nav} aria-label="Links de contato">
          <p className={styles.navLabel}>Contato</p>
          <ul className={styles.navList}>
            {links.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.navLink}
                  {...(external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <span className={styles.navArrow} aria-hidden="true">→</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Scroll to top */}
        <div className={styles.topWrap}>
          <button
            onClick={scrollToTop}
            className={styles.scrollTop}
            aria-label="Voltar ao topo"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
          <p className={styles.topLabel}>Topo</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          &copy; 2026 Finanças sem Fronteira. Todos os direitos reservados.
        </p>
        <p className={styles.dev}>
          Desenvolvido por{" "}
          <a
            href="https://linkedin.com/in/vinicius-cardoso-de-lima-a9a918227/"
            target="_blank"
            rel="noreferrer"
            className={styles.devLink}
          >
            Vinicius Cardoso de Lima
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;