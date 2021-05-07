import clsx from 'clsx';
import React from 'react';
import styles from './GridPagination.module.scss';

const GridPagination = ({ pagesCount, page, onPageChange }) => {
  if (pagesCount < 2) {
    return null;
  }

  return (
    <div className={styles.root}>
      <button className={styles.arrow} disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        &lsaquo;
      </button>
      {page > 1 && (
        <button className={styles.number} onClick={() => onPageChange(1)}>
          1
        </button>
      )}
      {page - 1 > 3 && <span className={styles.ellipsis}>...</span>}
      {page > 3 && (
        <button className={styles.number} onClick={() => onPageChange(page - 2)}>
          {page - 2}
        </button>
      )}
      {page > 2 && (
        <button className={styles.number} onClick={() => onPageChange(page - 1)}>
          {page - 1}
        </button>
      )}
      <button className={clsx(styles.number, styles.active)}>{page}</button>
      {page < pagesCount - 1 && (
        <button className={styles.number} onClick={() => onPageChange(page + 1)}>
          {page + 1}
        </button>
      )}
      {page < pagesCount - 2 && (
        <button className={styles.number} onClick={() => onPageChange(page + 2)}>
          {page + 2}
        </button>
      )}
      {pagesCount - page > 3 && <span className={styles.ellipsis}>...</span>}
      {page < pagesCount && (
        <button className={styles.number} onClick={() => onPageChange(pagesCount)}>
          {pagesCount}
        </button>
      )}
      <button
        className={styles.arrow}
        disabled={page === pagesCount}
        onClick={() => onPageChange(page + 1)}
      >
        &rsaquo;
      </button>
    </div>
  );
};

export default GridPagination;
