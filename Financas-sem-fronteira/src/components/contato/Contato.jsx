import { useState } from "react";
import "./Contato.css";
import emailjs from "@emailjs/browser";

function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_9l7h8qj",
        "template_9l7h8qj",
        templateParams,
        "user_9l7h8qj",
      )

      .then(
        (response) => {
          console.log(
            "Email enviado com sucesso!",
            response.status,
            response.text,
          );
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro ao enviar email:", err);
          alert("Erro ao enviar email, tente novamente mais tarde.");
        },
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

        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
    </section>
  );
}

export default Contato;