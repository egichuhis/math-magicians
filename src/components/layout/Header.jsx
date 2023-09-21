import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => (
  <nav className={styles.nav}>
    <h1>Math Magicians</h1>
    <ul className={styles.ul}>
      <li><a href="/">Home</a></li>
      <li><a href="/calculator">Calculator</a></li>
      <li><a href="/quote">Quote</a></li>
    </ul>
  </nav>
);

export default Header;
