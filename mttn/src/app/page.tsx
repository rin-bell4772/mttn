import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav isLoggedIn={false}/>
      <Sidebar />
      
      <div className={styles.container}>
        <h1 className={styles.title}>MTTN</h1>
        <p className={styles.subtitle}>Better Quizlet</p>

        <div className={styles.buttonContainer}>
          <Link href="/createAccount">
            <Button type="button">Create account</Button>
          </Link>
          <Link href="/login">
            <Button type="button">Log in</Button>
          </Link>
        </div>

        <div className={styles.description}>
          <h2>What is it?</h2>
          <p>MTTN is a study tool that will help you study o.o</p>
        </div>

  
        <div className={styles.features}>
          <h2>FEATURES</h2>
          <div className={styles.featureCards}>
            <div className={styles.card}>Flashcards</div>
            <div className={styles.card}>Merging Sets</div>
            <div className={styles.card}>Interval Studying</div>
            <div className={styles.card}>Background Audio</div>
      
          </div>
        </div>
      </div>

     <Footer />
    </>
  );
}
