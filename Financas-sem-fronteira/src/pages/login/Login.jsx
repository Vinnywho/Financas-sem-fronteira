import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer";
import styles from "./Login.module.css";
import { supabase } from "../../services/supabase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw error;

      navigate("/blog-admin");
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login: " + error.message);
    }
  };

  return (
    <div>
      <Navbar isOtherPage={true} />
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <input
            className={styles.emailInput}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.passwordInput}
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;