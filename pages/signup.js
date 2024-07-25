import { useState } from 'react';
import Link from 'next/link';
import styles from './styles/signup.module.css'; // Adjust the path based on the actual location

const SignupComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email, mobileNumber, address, postalCode, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Signup successful');
      } else {
        setError(data.error || 'Signup failed');
      }
    } catch (error) {
      setError('An unexpected error occurred');
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className={styles.contain}>
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

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Sign Up</h1>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            {error && <p className={styles.error}>{error}</p>}
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />

            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />

            <label htmlFor="postalCode">Postal Code:</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />

            <label htmlFor="password">Create Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit" className={styles.signupButton}>Sign Up</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default function SignupPage() {
  return <SignupComponent />;
}
