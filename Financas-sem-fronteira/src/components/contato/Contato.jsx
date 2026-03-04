import "./Contato.css";
import { useForm, ValidationError } from '@formspree/react';

function Contato() {

  const [state, handleSubmit] = useForm("mqedrgvk");

  if (state.succeeded) {
    return (
      <section className="contato" id="contato">
        <div className="contato-container">
          <p className="success-msg">Obrigado! Sua mensagem foi enviada com sucesso.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="contato" id="contato">
      <div className="contato-container">
        <div className="descricao-contato">
          <h1 className="title">Contato</h1>
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
              href="https://www.instagram.com/financassemfronteira/"
              target="_blank"
              rel="noreferrer"
            >
              11 99864-3125
            </a>
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            className="input"
            type="email"
            name="email"
            placeholder="Digite seu email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            className="textarea"
            name="message"
            placeholder="Digite sua mensagem..."
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button 
            className="button" 
            type="submit" 
            disabled={state.submitting}
          >
            {state.submitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;