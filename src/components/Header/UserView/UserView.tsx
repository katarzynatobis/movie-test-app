import React from 'react';
import styles from './UserView.module.scss';

const UserView: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.loggedAs}>Logged in as <span className={styles.user}> Puglife</span></div>
    <div className={styles.avatar}/>
  </div>
);

export default UserView;
