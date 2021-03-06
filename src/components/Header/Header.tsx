import React from 'react';
import styles from './Header.module.scss';
import Logo from './Logo/Logo';
import SearchInput from './SearchInput/SearchInput';
import UserView from './UserView/UserView';

const Header: React.FC = () => (
  <header className={styles.container}>
    <div className={styles.item}><Logo /></div>
    <div className={styles.item}><SearchInput /></div>
    <div className={styles.item}><UserView /></div>
  </header>
);

export default Header;
