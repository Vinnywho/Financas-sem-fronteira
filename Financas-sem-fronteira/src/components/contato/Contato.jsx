import React from "react";
import styles from "./Contato.module.css";
import { useForm, ValidationError } from "@formspree/react";
import aos from "aos";
import "aos/dist/aos.css";

function Contato() {
  React.useEffect(() => {
    aos.init({ duration: 1000,
      once: true
    });
    
  }, []);

  const [state, handleSubmit] = useForm("mqedrgvk");

  if (state.succeeded) {
    return (
      <section className={styles.contato} id="contato" data-aos="fade-in" data-aos-delay="200">
        <div className={styles.contatoContainer}>
          <p className={styles.successMsg}>
            Obrigado! Sua mensagem foi enviada com sucesso.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.contato} id="contato">
      <div className={styles.contatoContainer}>
        <div className={styles.descricaoContato} data-aos="fade-right" data-aos-delay="100">
          <h1 className={styles.title}>Contato</h1>
          <p>
            Para entrar em contato preencha corretamente o formulário,
            retornaremos o mais breve possível!
          </p>
          <p>
            Ou se preferir, envie um email diretamente para:{" "}
            <a href="mailto:contato@financassemfronteira.com.br">
              contato@financassemfronteira.com.br
            </a>
          </p>
          <p>
            <a
              href="https://api.whatsapp.com/send?l=pt_BR&phone=5511998643125"
              target="_blank"
              rel="noreferrer"
            >
              11 99864-3125
            </a>
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
            data-aos="fade-left"
            data-aos-delay="100"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
            data-aos="fade-left"
            data-aos-delay="200"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Digite sua mensagem..."
            required
            data-aos="fade-left"
            data-aos-delay="300"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button className={styles.button} type="submit" disabled={state.submitting}>
            {state.submitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;