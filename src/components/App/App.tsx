import React from 'react';
import styles from './App.module.scss';
import Header from '../Header/Header';

const App: React.FC = () => (
  <div className={styles.App}>
    <Header/>
  </div>
);

export default App;
