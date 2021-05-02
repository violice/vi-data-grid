import React from 'react';
import { GridRow } from '../GridRow';
import { getVirtualized } from '../virtualized';
import styles from './GridBody.module.scss';

const GridBody = ({
  columns,
  rows,
  isVirtualized,
  height,
  scrollTop,
  editedCell,
  updateCell,
  startCellEditing,
  cancelCellEditing,
  finishCellEditing,
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
            editedCell={editedCell}
            updateCell={updateCell}
            startCellEditing={startCellEditing}
            cancelCellEditing={cancelCellEditing}
            finishCellEditing={finishCellEditing}
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
