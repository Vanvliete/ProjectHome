import React from 'react';
import styles from './Home.module.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function Home() {
  return (
    <div className={styles['home-container']}>
      <Header />
      <div className={styles['home-content']}>
        <h1 className={styles['home-title']}>Erik Van Vliet</h1>
        <h2 className={styles['home-subtitle']}>Software Engineer | Full-Stack Developer</h2>
        <p className={styles['home-text']}>Recent graduate with a 3-year advanced diploma in Computer Programming and Analysis. </p>
        <p className={styles['home-text']}>Currently expanding my project portfolio and learning new technologies to grow as a Software Engineer.</p>
      </div>
      <div className={styles['home-image-container']}>
        <img className={styles['home-image']} src="/displayPic.jpg" alt="Erik Van Vliet" />
      </div>
      <Footer />
    </div>
  );
}
