// pages/index.js
//import Head from 'next/head';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>


      <header className={styles.header}>
        <nav className={styles.navbar}>

          <div className={styles.authButtons}>
            <button className={styles.loginButton}>Login</button>
            <button className={styles.signupButton}>Sign up</button>
          </div>
        </nav>
      </header>
      

      <main className={styles.main}>
        <h1 className={styles.title}>WELCOME!</h1>
        <p className={styles.description}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
        <div className={styles.imagePlaceholder}>
          {/* <img src="/placeholder.png" alt="Placeholder" /> */}
        </div>
        <div className={styles.contactSection}>
          <button className={styles.contactButton}>Shop by form</button>
          <p>OR</p>
          <p>Call us xxx-xxx-xxxx</p>
        </div>
      </main>
    </div>
  );
}
