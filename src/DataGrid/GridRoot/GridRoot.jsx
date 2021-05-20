import React from 'react';
import clsx from 'clsx';
import styles from './GridRoot.module.scss';

const GridRoot = ({ children, className, height }) => {
  return (
    <div className={clsx(styles.root, className)} style={{ height, maxHeight: height }}>
      {children}
    </div>
  );
};

export default GridRoot;
