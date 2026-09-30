import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { supabase } from "../../services/supabase";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./ConversaReconhecimento.module.css";

const WHATSAPP_NUMBER = "5511998643125";

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function ConversaReconhecimento() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    motivo: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const origem = searchParams.get("origem") || "link-direto";
  const origemRef = searchParams.get("ref") || "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      setFormData((prev) => ({ ...prev, [name]: formatPhone(value) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.nome.trim()) {
      setError("Por favor, preencha seu nome.");
      return;
    }
    if (formData.whatsapp.replace(/\D/g, "").length < 10) {
      setError("Por favor, informe um WhatsApp válido.");
      return;
    }

    setSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from("conversa_reconhecimento")
        .insert([
          {
            nome: formData.nome.trim(),
            whatsapp: formData.whatsapp.trim(),
            email: formData.email.trim() || null,
            motivo: formData.motivo.trim() || null,
            origem: origem,
            origem_ref: origemRef || null,
            referrer: document.referrer || null,
          },
        ]);

      if (dbError) throw dbError;
      setSubmitted(true);
    } catch (err) {
      console.error("Erro ao salvar:", err);
      setError(
        "Ocorreu um erro ao enviar suas informações. Por favor, tente novamente."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const whatsAppMessage = encodeURIComponent(
    `Olá! Acabei de enviar minhas informações pelo site para a Conversa de Reconhecimento.
    O motivo do meu contato é: ${formData.motivo || "Não informado"}.
    Meu nome é ${formData.nome}. Gostaria de agendar um horário.`
  );
  const whatsAppUrl = `https://api.whatsapp.com/send?l=pt_BR&phone=${WHATSAPP_NUMBER}&text=${whatsAppMessage}`;

  return (
    <div className={styles.pageWrapper}>
      <Navbar isOtherPage={true} />

      {/* ════════ HERO ════════ */}
      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div data-aos="fade-right">
            {/* <span className={styles.eyebrow}>
              Conversa de Reconhecimento · 30 minutos
            </span> */}
            <h1 className={styles.heroTitle}>
              Seu dinheiro conta uma história.{" "}
              <span className={styles.heroTitleAccent}>
                Vamos começar pelo presente.
              </span>
            </h1>
            <p className={styles.heroText}>
              Um primeiro encontro para conhecer a abordagem da Finanças sem
              Fronteira, entender o AFINCO e a metodologia RRDD e descobrir se
              esse acompanhamento faz sentido para o seu momento.
            </p>
            <div className={styles.heroButtons}>
              <a className={`${styles.btn} ${styles.btnGold}`} href="#agendar">
                QUERO CONVERSAR SOBRE MEU MOMENTO →
              </a>
              <a
                className={`${styles.btn} ${styles.btnOutline}`}
                href="#como-funciona"
              >
                COMO FUNCIONA
              </a>
            </div>
            <p className={styles.heroDisclaimer}>
              Sem julgamento · Sem diagnóstico · Sem compromisso de contratação
            </p>
          </div>

          <div className={styles.heroCard} data-aos="zoom-in" data-aos-delay="200">
            <div className={`${styles.bubble} ${styles.b1}`} data-aos="zoom-in" data-aos-delay="400">
              Conheça a metodologia e o acompanhamento.
            </div>
            <div className={styles.circle}>
              <div className={styles.circleInner}>
                <strong className={styles.circleStrong}>30</strong>
                <small className={styles.circleSmall}>
                  minutos para
                  <br />
                  começar a conversar
                </small>
              </div>
            </div>
            <div className={`${styles.bubble} ${styles.b2}`} data-aos="zoom-in" data-aos-delay="600">
              Primeiro observar. Depois compreender. Então decidir.
            </div>
          </div>
        </div>
      </section>

      {/* ════════ COMO FUNCIONA ════════ */}
      <section className={styles.sectionWhite} id="como-funciona">
        <div className={`${styles.container} ${styles.center}`} data-aos="fade-up">
          <span className={styles.kicker}>Conversa de Reconhecimento</span>
          <h2 className={styles.sectionTitle}>
            O que acontece nessa conversa?
          </h2>
          <p className={`${styles.lead} ${styles.center}`}>
            Este encontro é uma etapa comercial e institucional. Ele existe para
            você conhecer o processo antes de decidir se quer fazer parte dele.
          </p>
        </div>

        <div className={`${styles.container} ${styles.cards}`}>
          <article className={styles.card} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.icon}>01</div>
            <h3 className={styles.cardTitle}>Conhecer seu momento</h3>
            <p className={styles.cardText}>
              Conversamos brevemente sobre o que trouxe você até aqui e o que
              está buscando agora.
            </p>
          </article>

          <article className={styles.card} data-aos="fade-up" data-aos-delay="200">
            <div className={styles.icon}>02</div>
            <h3 className={styles.cardTitle}>Conhecer o método</h3>
            <p className={styles.cardText}>
              Apresentamos o AFINCO, o RRDD, a dinâmica dos encontros e a lógica
              do acompanhamento.
            </p>
          </article>

          <article className={styles.card} data-aos="fade-up" data-aos-delay="300">
            <div className={styles.icon}>03</div>
            <h3 className={styles.cardTitle}>Alinhar expectativas</h3>
            <p className={styles.cardText}>
              Explicamos formatos, valores e próximos passos para verificar se
              existe alinhamento.
            </p>
          </article>
        </div>

        <div className={styles.container} data-aos="fade-up" data-aos-delay="400">
          <blockquote className={styles.quote}>
            Esta conversa não é uma sessão diagnóstica. Não analisamos seus
            gastos nem tentamos solucionar sua situação em 30 minutos.
          </blockquote>
        </div>
      </section>

      {/* ════════ AFINCO — JORNADA ════════ */}
      <section className={styles.section} id="jornada">
        <div className={`${styles.container} ${styles.center}`} data-aos="fade-up">
          <span className={styles.kicker}>Acompanhamento AFINCO</span>
          <h2 className={styles.sectionTitle}>
            3 meses · 6 encontros · 1 hora cada
          </h2>
          <p className={`${styles.lead} ${styles.center}`}>
            Encontros quinzenais para observar, compreender e experimentar
            mudanças possíveis na relação com o dinheiro.
          </p>
        </div>

        <div className={`${styles.container} ${styles.steps}`}>
          <article className={styles.step} data-aos="fade-up" data-aos-delay="100">
            <span className={styles.num}>ENCONTRO 01</span>
            <h3 className={styles.stepTitle}>Começar pelo presente</h3>
            <p className={styles.stepText}>
              Situação atual, sonhos, metas e apresentação do RRDD.
            </p>
          </article>
          <article className={styles.step} data-aos="fade-up" data-aos-delay="200">
            <span className={styles.num}>ENCONTRO 02</span>
            <h3 className={styles.stepTitle}>Primeiras percepções</h3>
            <p className={styles.stepText}>
              O que apareceu quando você começou a observar seus próprios
              registros.
            </p>
          </article>
          <article className={styles.step} data-aos="fade-up" data-aos-delay="300">
            <span className={styles.num}>ENCONTROS 03–04</span>
            <h3 className={styles.stepTitle}>Aprofundar</h3>
            <p className={styles.stepText}>
              Temas escolhidos conforme aquilo que emerge durante o processo.
            </p>
          </article>
          <article className={styles.step} data-aos="fade-up" data-aos-delay="400">
            <span className={styles.num}>ENCONTROS 05–06</span>
            <h3 className={styles.stepTitle}>Devolutiva e fechamento</h3>
            <p className={styles.stepText}>
              Mapa Comportamental Financeiro, antes × depois e continuidade.
            </p>
          </article>
        </div>
      </section>

      {/* ════════ RRDD ════════ */}
      <section className={styles.sectionWhite} id="rrdd">
        <div className={`${styles.container} ${styles.rrdd}`}>
          <div className={styles.rrddBox} data-aos="fade-up">
            <div data-aos="fade-right" data-aos-delay="200">
              <span className={styles.kicker} style={{ color: "#e1c45f" }}>
                Instrumento central
              </span>
              <h2 className={styles.rrddTitle}>
                RRDD — Registro de Recursos e Despesas Diárias
              </h2>
              <p className={styles.rrddText}>
                O registro não é uma prestação de contas ao profissional. É um
                instrumento para tornar visível aquilo que antes acontecia
                automaticamente.
              </p>
            </div>

            <div className={styles.checks}>
              <div className={styles.check} data-aos="fade-left" data-aos-delay="300">
                <span className={styles.checkMark}>✓</span>
                <span>O que aconteceu?</span>
              </div>
              <div className={styles.check} data-aos="fade-left" data-aos-delay="400">
                <span className={styles.checkMark}>✓</span>
                <span>Foi planejado?</span>
              </div>
              <div className={styles.check} data-aos="fade-left" data-aos-delay="500">
                <span className={styles.checkMark}>✓</span>
                <span>Como eu estava me sentindo?</span>
              </div>
              <div className={styles.check} data-aos="fade-left" data-aos-delay="600">
                <span className={styles.checkMark}>✓</span>
                <span>Por que comprei?</span>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left" data-aos-delay="300">
            <div className={styles.kicker}>Sem julgamento</div>
            <h2 className={styles.sectionTitle}>Não buscamos perfeição. Buscamos consciência.</h2>
            <p className={styles.lead} style={{ margin: 0, maxWidth: "none" }}>
              O objetivo inicial não é corrigir seus gastos. É observar o que acontece no cotidiano 
              para que você possa compreender seus próprios padrões e, a partir daí, escolher o que deseja mudar.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ TIMELINE ════════ */}
      <section className={styles.section}>
        <div className={`${styles.container} ${styles.center}`} data-aos="fade-up">
          <span className={styles.kicker}>Como o processo evolui</span>
          <h2 className={styles.sectionTitle}>
            Uma jornada construída a partir do que aparece
          </h2>
        </div>
        <div className={`${styles.container} ${styles.timeline}`}>
          <div className={styles.tline} data-aos="fade-up" data-aos-delay="100">
            <strong className={styles.tlineLabel}>MÊS 1</strong>
            <div>
              <h3 className={styles.tlineTitle}>Base do processo</h3>
              <p className={styles.tlineText}>
                Presente, sonhos, situação financeira e início do registro
                diário.
              </p>
            </div>
          </div>
          <div className={styles.tline} data-aos="fade-up" data-aos-delay="200">
            <strong className={styles.tlineLabel}>MÊS 2</strong>
            <div>
              <h3 className={styles.tlineTitle}>
                Aprofundamento adaptativo
              </h3>
              <p className={styles.tlineText}>
                Comportamento, emoções, identidade, valores, propósito,
                trabalho e futuro — conforme o que emerge.
              </p>
            </div>
          </div>
          <div className={styles.tline} data-aos="fade-up" data-aos-delay="300">
            <strong className={styles.tlineLabel}>MÊS 3</strong>
            <div>
              <h3 className={styles.tlineTitle}>
                Devolutiva e fechamento
              </h3>
              <p className={styles.tlineText}>
                Mapa Comportamental Financeiro, reavaliação, retomada dos sonhos
                e pequenas mudanças possíveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA + FORMULÁRIO ════════ */}
      <section className={styles.ctaSection} id="agendar">
        <div className={styles.container}>
          <div data-aos="fade-up">
            <span className={styles.kicker} style={{ color: "#e1c45f" }}>
              Primeiro passo
            </span>
            <h2 className={`${styles.sectionTitle}`} style={{ color: "#fff" }}>
              Vamos conversar sobre o seu momento?
            </h2>
            <p className={styles.lead} style={{ color: "rgba(255,255,255,0.8)", margin: "0 auto 20px" }}>
              Preencha as informações abaixo e siga para o WhatsApp para
              agendarmos sua Conversa de Reconhecimento de 30 minutos.
            </p>
          </div>

          <div className={styles.booking} data-aos="fade-up" data-aos-delay="200">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className={styles.bookingGrid}>
                  <div>
                    <label className={styles.formLabel} htmlFor="nome">
                      Nome *
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      className={styles.formInput}
                      placeholder="Como você gostaria de ser chamado(a)"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className={styles.formLabel} htmlFor="whatsapp">
                      WhatsApp *
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      className={styles.formInput}
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.formFull}>
                    <label className={styles.formLabel} htmlFor="email">
                      E-mail (opcional)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.formInput}
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formFull}>
                    <label className={styles.formLabel} htmlFor="motivo">
                      O que fez você se identificar com este conteúdo ou
                      procurar acompanhamento neste momento?
                    </label>
                    <textarea
                      id="motivo"
                      name="motivo"
                      className={styles.formTextarea}
                      placeholder="Conte brevemente o que você está buscando."
                      value={formData.motivo}
                      onChange={handleChange}
                    />
                  </div>

                  {error && (
                    <div className={styles.formFull}>
                      <p style={{ color: "#c0392b", fontWeight: 600, textAlign: "center" }}>
                        {error}
                      </p>
                    </div>
                  )}

                  <div className={styles.formFull}>
                    <button
                      type="submit"
                      className={`${styles.btn} ${styles.btnGold}`}
                      style={{ width: "100%" }}
                      disabled={submitting}
                    >
                      {submitting
                        ? "ENVIANDO..."
                        : "QUERO CONVERSAR SOBRE MEU MOMENTO →"}
                    </button>
                    <p className={styles.notice}>
                      Seus dados serão utilizados apenas para viabilizar o
                      contato e o agendamento da sua Conversa de Reconhecimento.
                    </p>
                  </div>
                </div>
              </form>
            ) : (
              <div className={styles.successCard}>
                <h3 className={styles.successTitle}>
                  Recebemos suas informações!
                </h3>
                <p className={styles.successText}>
                  O próximo passo é conversar com a gente pelo WhatsApp para
                  encontrarmos o melhor horário para sua Conversa de
                  Reconhecimento.
                </p>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.btn} ${styles.btnWhatsApp}`}
                >
                  CONTINUAR PARA O WHATSAPP →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ConversaReconhecimento;
