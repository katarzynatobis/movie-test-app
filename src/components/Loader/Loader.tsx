import React from "react";
import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.container}>
      <progress className={styles.progressSpin}/>
    </div>
  );
};

export default Loader;
