import React from 'react';
import styles from './GridContent.module.scss';

const GridContent = ({ children }) => {
  return <table className={styles.root}>{children}</table>;
};

export default GridContent;
