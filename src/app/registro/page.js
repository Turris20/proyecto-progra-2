import Head from "next/head";
import styles from "./page.module.css";

export default function Page() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Registro de Usuario</title>
            </Head>
            <main className={styles.bodyContainer}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>Registro de Usuario</h2>
                    <form id="registroForm" className={styles.form} action="#" method="post">
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="nombre"><i className="fas fa-user"></i> Nombre:</label>
                            <input className={styles.inputText} type="text" id="nombre" name="nombre" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email"><i className="fas fa-envelope"></i> Correo Electrónico:</label>
                            <input className={styles.inputEmail} type="email" id="email" name="email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="password"><i className="fas fa-lock"></i> Contraseña:</label>
                            <input className={styles.inputPassword} type="password" id="password" name="password" required />
                        </div>
                        <button className={styles.inputSubmit} type="submit"><i className="fas fa-user-plus"></i> Registrar</button>
                    </form>
                </div>
            </main>
        </>
    );
}
