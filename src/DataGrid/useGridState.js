import { useReducer, useEffect } from 'react';
import produce from 'immer';
import { SORT_ORDERS } from './constants';
import { compose, prepareColumns, prepareRows } from './helpers';
import logger from './logger';

const reducer = compose(
  logger,
  produce,
)((state, action) => {
  switch (action.type) {
    case 'COLUMNS_UPDATED':
      const { headerGroups, columns } = action.payload;
      state.headerGroups = headerGroups;
      state.columns = columns;
      break;

    case 'ROWS_UPDATED':
      state.rows = action.payload;
      break;

    case 'SORT_CHANGED':
      state.sort = action.payload;
      break;

    case 'PAGE_CHANGED':
      state.page = action.payload;
      break;

    case 'PAGE_SIZE_CHANGED':
      state.pageSize = action.payload;
      break;

    case 'CELL_EDITING_STARTED':
      state.editedCell = action.payload;
      break;

    case 'CELL_EDITING_CANCELED':
      state.editedCell = null;
      break;

    case 'CELL_EDITING_FINISHED': {
      const { rowId, field, value } = action.payload;
      const index = state.rows.findIndex(row => row.id === rowId);
      state.rows[index].data[field] = value;
      state.editedCell = null;
      break;
    }
  }
});

const initialState = {
  headerGroups: [],
  columns: [],
  rows: [],
  sort: { order: 'none', field: null },
  page: 0,
  pageSize: 100,
  editedCell: null,
};

const useGridState = ({ colDefs, rowDefs, getRowId, onCellEdited }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const { headerGroups, columns } = prepareColumns(colDefs);
    dispatch({ type: 'COLUMNS_UPDATED', payload: { headerGroups, columns } });
  }, [colDefs]);

  useEffect(() => {
    const rows = prepareRows(rowDefs, getRowId, state.sort);
    dispatch({ type: 'ROWS_UPDATED', payload: rows });
  }, [rowDefs, getRowId, state.sort]);

  const changeSort = ({ field }) => {
    const order = field === state.sort.field ? SORT_ORDERS[state.sort.order] : 'ascending';

    dispatch({
      type: 'SORT_CHANGED',
      payload: { order, field },
    });
  };

  const changePage = page => {
    dispatch({ type: 'PAGE_CHANGED', payload: page });
  };

  const changePageSize = pageSize => {
    dispatch({ type: 'PAGE_SIZE_CHANGED', payload: pageSize });
  };

  const startCellEditing = ({ rowId, field }) => {
    dispatch({ type: 'CELL_EDITING_STARTED', payload: { rowId, field } });
  };

  const cancelCellEditing = () => dispatch({ type: 'CELL_EDITING_CANCELED' });

  const finishCellEditing = ({ rowId, field, value, rowData }) => {
    dispatch({
      type: 'CELL_EDITING_FINISHED',
      payload: { rowId, field, value },
    });
    onCellEdited && onCellEdited({ rowId, field, value, rowData });
  };

  return {
    ...state,
    changeSort,
    changePage,
    changePageSize,
    startCellEditing,
    cancelCellEditing,
    finishCellEditing,
  };
};

export default useGridState;
