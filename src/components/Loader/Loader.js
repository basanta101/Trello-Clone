// Loader.js
import React from 'react';
import styles from './Loader.module.scss'; // Import styles as an object

const Loader = ({ type = 'page' }) => {
  return (
    <div className={`${styles.loader} ${type === 'component' ? styles.componentLoader : ''}`}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
