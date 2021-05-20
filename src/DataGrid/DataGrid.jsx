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

* [ ] Clickable cells
* [ ] Refactor headerGroups & rows (with cells) preparing
* [ ] Refactor row menu api
* [ ] Add column types (string, number, date, datetime, currency (price), percentage)
* [ ] Add cellEditRenders for different column types
* [ ] Add GridContext (GridApi) to provide all props (data, methods) throw context (like material-ui data-grid) (???)

*/

const DataGrid = ({
  className,
  columns: colDefs,
  rows: rowDefs,
  height: rootHeight,
  isVirtualized,
  pagesCount,
  rowsCount,
  getRowId,
  rowMenu,
  onCellChange,
  onCellEdited,
  onPageChange,
  onPageSizeChange,
  onRowMenuItemClick,
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
    updateCell,
    startCellEditing,
    cancelCellEditing,
    finishCellEditing,
  } = useGridState({
    colDefs,
    rowDefs,
    getRowId,
    onCellChange,
    onCellEdited,
    onPageChange,
    onPageSizeChange,
  });

  return (
    <GridRoot className={className} height={rootHeight}>
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
                  height={height}
                  isVirtualized={isVirtualized}
                  rowMenu={rowMenu}
                  scrollTop={scrollTop}
                  editedCell={editedCell}
                  updateCell={updateCell}
                  startCellEditing={startCellEditing}
                  cancelCellEditing={cancelCellEditing}
                  finishCellEditing={finishCellEditing}
                  onRowMenuItemClick={onRowMenuItemClick}
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
  className: PropTypes.string,
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
  rowMenu: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,
    }),
  ),
  onCellChange: PropTypes.func,
  onCellEdited: PropTypes.func,
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
  onRowMenuItemClick: PropTypes.func,
};

DataGrid.defaultProps = {
  className: null,
  rows: [],
  height: null,
  isVirtualized: false,
  pagesCount: 0,
  rowsCount: 0,
  getRowId: null,
  rowMenut: null,
  onCellChange: null,
  onCellEdited: null,
  onPageChange: null,
  onPageSizeChange: null,
  onRowMenuItemClick: null,
};

export default DataGrid;
