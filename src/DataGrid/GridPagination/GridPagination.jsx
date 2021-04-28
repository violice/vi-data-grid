import React from 'react';
import styles from './GridPagination.module.scss';

const GridPagination = ({ pagesCount, page, onPageChange }) => {
  if (pagesCount < 1) {
    return null;
  }

  return <div className={styles.root}>pagination</div>;
};

export default GridPagination;
