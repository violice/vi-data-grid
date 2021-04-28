import React from 'react';
import styles from './GridRoot.module.scss';

const GridRoot = ({ children, height }) => {
  return (
    <div className={styles.root} style={{ height, maxHeight: height }}>
      {children}
    </div>
  );
};

export default GridRoot;
