import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/contact.module.css';
import { useAuth } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';
import { SignUpButton } from '@clerk/clerk-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.email || (!/\S+@\S+\.\S+/.test(formData.email) && !/^\d+$/.test(formData.email))) {
      tempErrors.email = 'Please enter a valid email address or mobile number.';
      isValid = false;
    }

    if (!formData.name.trim()) {
      tempErrors.name = 'Please enter your name.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please enter a message.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          email: '',
          name: '',
          message: '',
        });
        setErrors({});
      } else {
        alert('Failed to send message.');
      }
    }
  };

  return (
    <div className={styles.contain}>
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

      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <p className={styles.description}>
              Need assistance? You can reach us by calling or emailing your shopping queries using the contact information provided below or you can fill out the given form and we will reach out to you in decent time.
            </p>
            <p className={styles.email}>Email: shopandsendmb@gmail.com</p>
          </div>
          <div className={styles.rightColumn}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Enter E-mail address or mobile number</label>
                <input 
                  type="text" 
                  id="email" 
                  className={styles.formControl} 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={styles.formControl} 
                  value={formData.name} 
                  onChange={handleChange} 
                />
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  className={styles.formControl} 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                />
                {errors.message && <p className={styles.error}>{errors.message}</p>}
              </div>
              <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



