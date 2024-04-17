import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
  


export default function Page() {
    return (
    <main>
      <Link href={'/'} className={styles.linkbotonvolver}>
      <span>&#8592;</span>  volver</Link>
      <center><h1>Página de registro</h1></center>
    </main>
      
    );
  }