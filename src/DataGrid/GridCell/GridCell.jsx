import React from 'react';
import clsx from 'clsx';
import styles from './GridCell.module.scss';

const GridCell = ({ children, width, flex, left, isSticky, isEditable, onClick }) => {
  return (
    <td
      className={clsx(styles.root, isSticky && styles.sticky, isEditable && styles.editable)}
      style={{ width, flex, left }}
      onClick={onClick}
    >
      {children}
    </td>
  );
};

export default React.memo(GridCell);
