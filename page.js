'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "usuario" && password === "contraseña") {
      setIsLoggedIn(true);
    } else {
      alert("Nombre de usuario o contraseña incorrectos. Por favor, intenta de nuevo.");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          {isLoggedIn ? (
            <>
              <h1>Bienvenido, {username}!</h1>
              <p>Aquí va el contenido protegido por inicio de sesión.</p>
            </>
          ) : (
            <div className={styles.formWrapper}>
              <h1 className={styles.formTitle}>Iniciar Sesión</h1>
              <div className={styles.form}>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.inputField}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.inputField}
                />
                <button onClick={handleLogin} className={styles.loginButton}>Ingresar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

