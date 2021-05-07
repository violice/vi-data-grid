import React from 'react';
import { GridCell } from '../GridCell';
import { GridRowMenu } from '../GridRowMenu';
import styles from './GridRow.module.scss';

const GridRow = ({
  id,
  data,
  columns,
  menu,
  updateCell,
  editedCell,
  startCellEditing,
  cancelCellEditing,
  finishCellEditing,
  onMenuItemClick,
}) => {
  return (
    <tr className={styles.root}>
      {columns.map(column => {
        const params = {
          rowId: id,
          rowData: data,
          colDef: column,
          field: column.field,
        };

        const value = column.valueGetter ? column.valueGetter(params) : data[column.field];

        const formattedValue = column.valueFormatter
          ? column.valueFormatter({ ...params, value })
          : value;

        let cellRender = null;
        if (editedCell && editedCell.rowId === id && editedCell.field === column.field) {
          cellRender = column.renderEditCell({
            ...params,
            value,
            formattedValue,
            cancelCellEditing,
            finishCellEditing,
          });
        } else if (column.renderCell) {
          cellRender = column.renderCell({
            ...params,
            value,
            formattedValue,
            updateCell,
          });
        }

        const onClick = column.isEditable
          ? () => startCellEditing({ rowId: id, field: column.field })
          : null;

        return (
          <GridCell
            key={column.field}
            width={column.width}
            flex={column.flex}
            left={column.left}
            isSticky={column.isSticky}
            isEditable={column.isEditable}
            onClick={onClick}
          >
            {cellRender || formattedValue || value}
          </GridCell>
        );
      })}

      {menu && <GridRowMenu rowId={id} rowData={data} items={menu} onItemClick={onMenuItemClick} />}
    </tr>
  );
};

export default GridRow;
