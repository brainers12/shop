import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles/index.module.css';

export default function Home() {
  const [firstName, setFirstName] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedFirstName = localStorage.getItem('firstName');
    if (token && storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    setFirstName(null);
    router.push('/login');
  };

  return (
    <div className={styles.container}>
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
            {firstName ? (
              <>
                <span className={styles.greeting}>Hi {firstName}</span>
                <button className={styles.signOutButton} onClick={handleSignOut}>Sign Out</button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className={styles.loginButton}>Login</button>
                </Link>
                <Link href="/signup">
                  <button className={styles.signupButton}>Sign Up</button>
                </Link>
              </>
            )}
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
          <Link href="/Form">
            <button className={styles.contactButton}>Shop by form</button>
          </Link>
          
          <p>OR</p>
          <p>Call us xxx-xxx-xxxx</p>
        </div>
      </main>
    </div>
  );
}
