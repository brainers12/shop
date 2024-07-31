import { useAuth } from '@clerk/clerk-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './styles/dashboard.module.css'; // Adjust the path as needed

export default function Dashboard() {
  const { isSignedIn, user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/sign-in');
    }
  }, [isSignedIn]);

  if (!isSignedIn) return null;

  const firstName = user?.firstName;

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.logo}>
              <Link href="/">
                <img src="/img/user4.png" alt="Logo" width={50} height={50} />
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
            <span className={styles.greeting}>Hi {firstName}</span>
            <button className={styles.signOutButton} onClick={handleSignOut}>Sign Out</button>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.description}>
          Welcome to your dashboard, {firstName}!
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...
        </p>
        <div className={styles.buttons}>
          <Link href="/Form">
            <button className={styles.primaryButton}>Shop by form</button>
          </Link>
          <p>OR</p>
          <p>Call us xxx-xxx-xxxx</p>
        </div>
      </main>
    </div>
  );
}
