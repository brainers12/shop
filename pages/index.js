import { useAuth } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';
import { SignUpButton } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/index.module.css';  // Ensure this path is correct

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.logo}>
              <Link href="/">
                <Image src="/img/user4.png" alt="Logo" width={50} height={50} />
              </Link>
            </li>
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
            <SignInButton mode="modal">
              <button className={`${styles.authButton} ${styles.authButtonPrimary}`}>Login</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className={`${styles.authButton} ${styles.authButtonPrimary}`}>Sign up</button>
            </SignUpButton>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Shop and Send Manitoba!</h1>
        <p className={styles.description}>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...
        </p>
        <div className={styles.imagePlaceholder}>
          <Link href="/Form">
            <button className={`${styles.btn} ${styles.btnPrimary}`}>Shop by form</button>
          </Link>
          <p>OR</p>
          <p>Call us xxx-xxx-xxxx</p>
        </div>
      </main>
    </div>
  );
}
