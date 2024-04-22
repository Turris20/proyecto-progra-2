import Head from "next/head";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>HealthSync: Tu salud, siempre sincronizada</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Bienvenido a HealthSync</h1>
            <p className={styles.subtitle}>Tu salud, siempre sincronizada.</p>
            <div className={styles.buttonsContainer}>
              <Link href="/iniciodesesion" passHref>
                <button className={styles.button}>Inicia sesión</button>
              </Link>
              <Link href="/registro" passHref>
                <button className={styles.button}>Regístrate</button>
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src="/foto.jpg" className={styles.image} alt="Imagen de fondo" />
          </div>
        </div>
      </main>
    </>
  );
}
