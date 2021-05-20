import { renderEditInputCell } from './GridEditInputCell';

export const DEFAULT_COL_DEF = {
  type: 'string',

  width: 150,
  left: 0,
  headerCellStyle: {},

  isSticky: false,
  isSortable: false,
  isEditable: false,

  valueGetter: null,
  valueFormatter: null,

  renderCell: null,
  renderEditCell: renderEditInputCell,
};

export const SORT_ORDERS = {
  none: 'ascending',
  ascending: 'descending',
  descending: 'none',
};
