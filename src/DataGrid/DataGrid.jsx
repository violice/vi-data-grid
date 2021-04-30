import React from 'react';
import PropTypes from 'prop-types';

import { GridRoot } from './GridRoot';
import { GridToolbar } from './GridToolbar';
import { GridAutoSizer } from './GridAutoSizer';
import { GridWindow } from './GridWindow';
import { GridContent } from './GridContent';
import { GridHeader } from './GridHeader';
import { GridBody } from './GridBody';
import { GridPagination } from './GridPagination';

import useGridState from './useGridState';

/* TODO:

### Phase 1

* [x] Pagination (page, pageSize)
* [x] Header groups
* Title and reload
* Save sort to local storage
* Loading and NoData overlays
* Infinite scroll
* Row menu

### Phase 2

* Add column types (string, number, date, datetime, currency (price), percentage)
* Add cellEditRenders Input, Select
* Add cellRenders Link, Rating

### Phase 3

* Add GridContext (GridApi) to provide all props (data, methods) throw context (like material-ui data-grid) (???)

*/

const DataGrid = ({
  columns: colDefs,
  rows: rowDefs,
  height: rootHeight,
  isVirtualized,
  pagesCount,
  rowsCount,
  getRowId,
  onCellEdited,
}) => {
  const {
    headerGroups,
    columns,
    rows,
    sort,
    page,
    pageSize,
    editedCell,
    changeSort,
    changePage,
    changePageSize,
    startCellEditing,
    cancelCellEditing,
    finishCellEditing,
  } = useGridState({
    colDefs,
    rowDefs,
    getRowId,
    onCellEdited,
  });

  return (
    <GridRoot height={rootHeight}>
      <GridToolbar
        rowsCount={rowsCount}
        pagesCount={pagesCount}
        page={page}
        pageSize={pageSize}
        onPageChange={changePage}
        onPageSizeChange={changePageSize}
      />
      <GridAutoSizer>
        {({ width, height }) => (
          <GridWindow width={width} height={height} isVirtualized={isVirtualized}>
            {scrollTop => (
              <GridContent>
                <GridHeader headerGroups={headerGroups} sort={sort} changeSort={changeSort} />
                <GridBody
                  columns={columns}
                  rows={rows}
                  isVirtualized={isVirtualized}
                  height={height}
                  scrollTop={scrollTop}
                  editedCell={editedCell}
                  startCellEditing={startCellEditing}
                  cancelCellEditing={cancelCellEditing}
                  finishCellEditing={finishCellEditing}
                />
              </GridContent>
            )}
          </GridWindow>
        )}
      </GridAutoSizer>
      <GridPagination pagesCount={pagesCount} page={page} onPageChange={changePage} />
    </GridRoot>
  );
};

DataGrid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,

      type: PropTypes.string,

      width: PropTypes.number,
      flex: PropTypes.number,

      isSticky: PropTypes.bool,
      isSortable: PropTypes.bool,
      isEditable: PropTypes.bool,

      valueGetter: PropTypes.func,
      valueFormatter: PropTypes.func,

      renderCell: PropTypes.func,
      renderEditCell: PropTypes.func,
    }),
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object),
  height: PropTypes.number,
  isVirtualized: PropTypes.bool,
  pagesCount: PropTypes.number,
  rowsCount: PropTypes.number,
  getRowId: PropTypes.func,
  onCellEdited: PropTypes.func,
};

DataGrid.defaultProps = {
  rows: [],
  height: null,
  isVirtualized: false,
  pagesCount: 0,
  rowsCount: 0,
  getRowId: null,
  onCellEdited: null,
};

export default DataGrid;
