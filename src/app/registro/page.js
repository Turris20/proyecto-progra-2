import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Head from "next/head"; // Importar correctamente desde 'next/head'

export default function Page() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Registro de Usuario</title>
            </Head>
            <main>
                <div className={styles.container}>
                    <h2 className={styles.h2}>Registro de Usuario</h2>
                    <form id="registroForm" action="#" method="post">
                        <label className={styles.label} htmlFor="nombre">Nombre:</label>
                        <input className={styles.inputText} type="text" id="nombre" name="nombre" required />
                        <label className={styles.label} htmlFor="email">Correo Electrónico:</label>
                        <input className={styles.inputEmail} type="email" id="email" name="email" required />
                        <label className={styles.label} htmlFor="password">Contraseña:</label>
                        <input className={styles.inputPassword} type="password" id="password" name="password" required />
                        <input className={styles.inputSubmit} type="submit" value="Registrar" />
                    </form>
                </div>
            </main>
        </>
    );
}
