import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div>
      <footer className="footer">

        <div className={styles['footer-text']}>
          <a className={styles['img-footer']} href="https://www.linkedin.com/in/erik-van-vliet/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/?size=1x&id=8808&format=png" alt="linkedin" />
          </a>
          <a className={styles['img-footer']} href="https://github.com/Vanvliete" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/?size=1x&id=12599&format=png" alt="github" />
          </a>
          <a className={styles['img-footer']} href="mailto:vanvliet.e.work@gmail.com" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/?size=1x&id=YRRhCXfA0Vd0&format=png" alt="email" />
          </a>
        </div>
      </footer>
    </div>
  );
}
