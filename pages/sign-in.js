import { SignIn } from '@clerk/clerk-react';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/signin.module.css';

export default function SignInPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In | Shop and Send Manitoba</title>
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
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <SignIn path="/sign-in" routing="path" />
        </div>
      </main>
    </div>
  );
}
