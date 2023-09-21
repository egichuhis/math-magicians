import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => (
  <nav className={styles.nav}>
    <h1>Math Magicians</h1>
    <ul>
      <a href="/"><li>Home</li></a>
      <a href="/calculator"><li>Calculator</li></a>
      <a href="/quote"><li>Quote</li></a>
    </ul>
  </nav>
);

export default Header;
