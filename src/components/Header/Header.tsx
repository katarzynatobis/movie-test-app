import React from 'react';
import styles from './Header.module.scss';
import Logo from './Logo/Logo';

const Header: React.FC = () => (
  <header className={styles.container}>
    <div className={styles.item}><Logo /></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
  </header>
);

export default Header;
