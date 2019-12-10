import React from 'react';
import styles from './Logo.module.scss';
import { ReactComponent as Film} from "../../../assets/images/film-solid.svg";

const Logo: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.logo}><Film /></div>
    <h1 className={styles.logotype}>Cinematch</h1>
  </div>
);

export default Logo;
