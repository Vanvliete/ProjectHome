import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <div>
      <img className={styles.logo} src="/displayLogo.png" alt="logo" />

      <header className={styles.navHeader}>

        <ul className="main-nav">

          <li className={styles.navFont}><Link to="/">Home</Link></li>
          <li className={styles.navFont}><Link to="/about">About Me</Link></li>
          <li className={styles.navFont}><Link to="/about">Experience</Link></li>
          <li className={styles.navFont}><Link to="/projects">Projects</Link></li>
          <li className={styles.navFont}><Link to="/contact">Contact</Link></li>

        </ul>

      </header>
    </div>
  );
}
