import Link from 'next/link';
import styles from './styles/contact.module.css'; 

export default function ContactPage() {
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
              <button className={styles.signupButton}>Sign up</button>
            </Link>
          </div>
        </nav>
      </header>
    
      <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.content}>
       <div className={styles.leftColumn}>
         <p className={styles.description}>
           Need assistance? You can reach us by calling or emailing your shopping queries using the contact information provided below or you can fill out the given form and we will reach out to you in decent time.
         </p>
         <p className={styles.email}>Email: shopandsend@gmail.com</p>
       </div>
        <div className={styles.rightColumn}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Enter E-mail address or mobile number</label>
              <input type="email" id="email" className={styles.formControl} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" className={styles.formControl} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" className={styles.formControl} rows="5" />
            </div>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}