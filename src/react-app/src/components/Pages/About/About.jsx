import React from 'react';
import styles from './About.module.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function About() {
  return (
    <div className={styles['home-container']}>
      <Header />
      <Footer />
    </div>
  );
}
