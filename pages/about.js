import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/about.module.css';
import { useAuth } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';
import { SignUpButton } from '@clerk/clerk-react';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO at Company',
    message: "It's just incredible! It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance is now neater than before, thanks to Spend.In!",
    image: '/img/user1.jpg',
  },
  {
    name: 'Natasha Romanoff',
    title: 'Black Widow',
    message: "Satisfied User Here! Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!",
    image: '/img/user2.jpg',
  },
  {
    name: 'Moritika Kazuki',
    title: 'Finance Manager at Mangan',
    message: "No doubt, Spend.In is the best! The best! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!",
    image: '/img/user3.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us | Shop and Send Manitoba</title>
        <meta name="description" content="Learn about Shop and Send Manitoba" />
      </Head>
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
        <h1 className={styles.title}>WHAT THEY SAY</h1>
        <h2 className={styles.subtitle}>Our User Kind Words</h2>
        <p className={styles.description}>
          Here are some testimonials from our user after using Shop and Send Manitoba to manage their business expenses.
        </p>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.message}>"{testimonial.message}"</p>
              <div className={styles.userInfo}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.userImage} />
                <div>
                  <p className={styles.userName}>{testimonial.name}</p>
                  <p className={styles.userTitle}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
