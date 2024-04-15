'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import firebase from './firebase'

const SignIn = async({email,password})=>{
  firebase.auth.signIn
 }

export default function Page() {
  
 

  return (
    <main className={styles.main}>
      
      
      <div className={styles.loginContainer}>
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
      
    </main>
  );
}