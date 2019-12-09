import React from "react";
import styles from "./UserView.module.scss";

const UserView: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.loggedAsContainer}>
      <div className={styles.logged}>Logged in as </div>
      <div className={styles.user}>
        Puglife
      </div>
    </div>
    <div className={styles.avatar} />
  </div>
);

export default UserView;
