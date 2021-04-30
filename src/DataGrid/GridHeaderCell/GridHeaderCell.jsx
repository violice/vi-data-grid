import React from 'react';
import clsx from 'clsx';
import styles from './GridHeaderCell.module.scss';

const GridHeaderCell = ({ children, width, flex, left, style, isSticky, isSortable, onClick }) => {
  return (
    <th
      className={clsx(styles.root, isSticky && styles.sticky, isSortable && styles.sortable)}
      style={{ width, flex, left, ...style }}
      onClick={onClick}
    >
      {children}
    </th>
  );
};

export default GridHeaderCell;
