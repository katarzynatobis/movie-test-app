import React from 'react';
import styles from './Logo.module.scss';
import FilmIcon from '../../../assets/images/FilmIcon';

const Logo: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.logo}><FilmIcon /></div>
    <h1 className={styles.logotype}>Cinematch</h1>
  </div>
);

export default Logo;
