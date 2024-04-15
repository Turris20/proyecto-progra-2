import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.loginContainer}>
        <h1>Bienvenido</h1>
        <p>¿Qué desea realizar?</p>
        <center>
        <ul className={styles.listaordenada}>
        <li><Link href={'/iniciodesesion'} className={styles.linkboton}>
          Inicia sesión
        </Link></li>
        <br></br>
        <li><Link href={'/registro'} className={styles.linkboton} > 
          Regístrate
        </Link></li>
        </ul>
        </center>
      </div>
      
      
    </main>
  );
}
