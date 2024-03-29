import React from 'react';
import { GridRow } from '../GridRow';
import { getVirtualized } from '../virtualized';
import styles from './GridBody.module.scss';

const GridBody = ({
  columns,
  rows,
  height,
  isVirtualized,
  rowMenu,
  scrollTop,
  editedCell,
  updateCell,
  startCellEditing,
  cancelCellEditing,
  finishCellEditing,
  onRowMenuItemClick,
}) => {
  let virtualized = isVirtualized && getVirtualized({ height, scrollTop, rows });

  return (
    <tbody className={styles.root}>
      {isVirtualized && (
        <tr style={{ height: virtualized.beginHeight }}>
          <td style={{ height: virtualized.beginHeight }} />
        </tr>
      )}

      {(isVirtualized ? virtualized.virtualizedRows : rows).map(row => {
        return (
          <GridRow
            key={row.id}
            id={row.id}
            data={row.data}
            columns={columns}
            menu={rowMenu}
            editedCell={editedCell}
            updateCell={updateCell}
            startCellEditing={startCellEditing}
            cancelCellEditing={cancelCellEditing}
            finishCellEditing={finishCellEditing}
            onMenuItemClick={onRowMenuItemClick}
          />
        );
      })}

      {isVirtualized && (
        <tr style={{ height: virtualized.endHeight }}>
          <td style={{ height: virtualized.endHeight }} />
        </tr>
      )}
    </tbody>
  );
};

export default GridBody;
