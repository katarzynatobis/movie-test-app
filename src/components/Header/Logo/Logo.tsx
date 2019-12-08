import React from 'react';
import styles from './Logo.module.scss';
import { ReactComponent as Film} from "../../../assets/film-solid.svg";

const Logo: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.logo}><Film /></div>
    <div className={styles.logotype}>Cinematch</div>
  </div>
);

export default Logo;
