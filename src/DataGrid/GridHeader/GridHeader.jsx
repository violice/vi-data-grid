import React from 'react';
import { GridHeaderCell } from '../GridHeaderCell';
import styles from './GridHeader.module.scss';

const GridHeader = ({ headerGroups, sort, changeSort }) => {
  return (
    <thead className={styles.root}>
      {headerGroups.map((columns, index) => (
        <tr key={index} className={styles.row}>
          {columns.map(column => {
            const onClick = column.isSortable ? () => changeSort({ field: column.field }) : null;

            return (
              <GridHeaderCell
                key={column.field}
                width={column.width}
                flex={column.flex}
                left={column.left}
                style={column.headerCellStyle}
                isSticky={column.isSticky}
                isSortable={column.isSortable}
                onClick={onClick}
              >
                {sort.field === column.field && sort.order !== 'none' && sort.order[0]}
                {column.header}
              </GridHeaderCell>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default GridHeader;
