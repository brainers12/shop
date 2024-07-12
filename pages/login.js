import Login from '../app/components/Login';

import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/index.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login | Shop and Send Manitoba</title>
        <meta name="description" content="Login to Shop and Send Manitoba" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>About Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>Contact Us</Link>
            </li>
          </ul>
          <div className={styles.authButtons}>
            <Link href="/login">
              <button className={styles.loginButton}>Login</button>
            </Link>
            <Link href="/signup">
              <button className={styles.signupButton}>Sign up</button>
            </Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Log In</h1>
        <div className={styles.formContainer}>
          <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Enter E-mail address or mobile number</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Enter Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className={styles.submitButton}>Log In</button>
          </form>
          <p className={styles.signupPrompt}>
            Don't have an account? <Link href="/signup" className={styles.navLink}>Sign Up</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
