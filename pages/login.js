import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/index.module.css';

export default function LoginPage() {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailOrMobile, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('firstName', data.firstName);
        router.push('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An unexpected error occurred');
      console.error('Error during login:', error);
    }
  };

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
              <button className={styles.signupButton}>Sign Up</button>
            </Link>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Log In</h1>
        <div className={styles.formContainer}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.inputGroup}>
              <label htmlFor="emailOrMobile">Enter E-mail address or mobile number</label>
              <input
                type="text"
                id="emailOrMobile"
                name="emailOrMobile"
                value={emailOrMobile}
                onChange={(e) => setEmailOrMobile(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Enter Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
