import React from 'react';
import styles from './Logo.module.scss';
import logo from "../../../assets/logo.svg";

const Logo: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.logo}><img src={logo} alt="" /></div>
    <div className={styles.logotype}>Cinematch</div>
  </div>
);

export default Logo;
