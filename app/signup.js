// pages/signup.js
import React from 'react';
import styles from './page.module.css';

const Signup = () => {
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
        <h1 className={styles.title}>Sign Up</h1>
        <form className={styles.signupForm}>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input type="tel" id="mobileNumber" name="mobileNumber" required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <label htmlFor="postalCode">Postal Code:</label>
          <input type="text" id="postalCode" name="postalCode" required />

          <label htmlFor="password">Create Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />

          <button type="submit" className={styles.signupButton}>Sign Up</button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
