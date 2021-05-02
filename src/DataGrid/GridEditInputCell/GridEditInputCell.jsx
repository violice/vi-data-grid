import React, { useRef, useState, useEffect } from 'react';
import styles from './GridEditInputCell.module.scss';

const GridEditInputCell = ({
  rowId,
  rowData,
  colDef,
  field,
  value,
  formattedValue,
  finishCellEditing,
  cancelCellEditing,
}) => {
  const ref = useRef();

  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
    ref.current.focus();
  }, [value]);

  return (
    <input
      ref={ref}
      className={styles.root}
      type={colDef.type}
      value={innerValue}
      onChange={e => setInnerValue(e.target.value)}
      onBlur={() => {
        finishCellEditing({ rowId, field, value: innerValue, rowData });
      }}
      onWheel={() => {
        finishCellEditing({ rowId, field, value: innerValue, rowData });
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          finishCellEditing({ rowId, field, value: innerValue, rowData });
        } else if (e.key === 'Escape') {
          cancelCellEditing();
        }
      }}
    />
  );
};

export default GridEditInputCell;

export const renderEditInputCell = params => <GridEditInputCell {...params} />;
