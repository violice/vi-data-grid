import { DEFAULT_COL_DEF } from './constants';

export const compose = (...functions) => {
  if (functions.length === 0) {
    return arg => arg;
  }
  if (functions.length === 1) {
    return functions[0];
  }
  return functions.reduce((a, b) => (...args) => a(b(...args)));
};

const calculateLeft = (column, index, colDefs) => {
  return column.isSticky
    ? colDefs
        .slice(0, index)
        .reduce((acc, column) => (acc += column.width || DEFAULT_COL_DEF.width), 0)
    : 0;
};

/*
TODO:
  - refacor
  - add header cell text wraping  right styles
*/

export const prepareColumns = colDefs => {
  const headerGroups = [[]];
  const columns = [];

  const multipleGroups = colDefs.some(column => column.columns);

  if (multipleGroups) {
    headerGroups.push([]);

    colDefs.forEach(column => {
      if (column.columns) {
        headerGroups[0].push({
          ...column,
          isSortable: false,
          width: column.columns.reduce(
            (acc, innerColumn) => acc + (innerColumn.width || DEFAULT_COL_DEF.width),
            0,
          ),
        });
        column.columns.forEach(innerColumn => {
          columns.push(innerColumn);
          headerGroups[1].push(innerColumn);
        });
      } else {
        columns.push(column);
        headerGroups[0].push({ ...column, header: '' });
        headerGroups[1].push({
          ...column,
          headerCellStyle: multipleGroups ? { height: 100, marginTop: -50 } : {},
        });
      }
    });

    return {
      headerGroups: [
        headerGroups[0].map((column, index) => {
          return {
            ...DEFAULT_COL_DEF,
            ...column,
            left: calculateLeft(column, index, headerGroups[0]),
          };
        }),
        headerGroups[1].map((column, index) => {
          return {
            ...DEFAULT_COL_DEF,
            ...column,
            left: calculateLeft(column, index, headerGroups[1]),
          };
        }),
      ],
      columns: columns.map((column, index) => {
        return {
          ...DEFAULT_COL_DEF,
          ...column,
          left: calculateLeft(column, index, columns),
        };
      }),
    };
  } else {
    colDefs.forEach(column => {
      columns.push(column);
      headerGroups[0].push(column);
    });

    return {
      headerGroups: [
        headerGroups[0].map((column, index) => {
          return {
            ...DEFAULT_COL_DEF,
            ...column,
            left: calculateLeft(column, index, headerGroups[0]),
          };
        }),
      ],
      columns: columns.map((column, index) => {
        return {
          ...DEFAULT_COL_DEF,
          ...column,
          left: calculateLeft(column, index, columns),
        };
      }),
    };
  }
};

// DEPRECATED
// export const prepareColumns = columns => {
//   return columns.map((column, index) => {
//     const left =
//       column.isSticky &&
//       columns
//         .slice(0, index)
//         .reduce((acc, column) => (acc += column.width || DEFAULT_COL_DEF.width), 0);

//     return {
//       ...DEFAULT_COL_DEF,
//       ...column,
//       left,
//     };
//   });
// };

const checkGridRowIdIsValid = (id, row) => {
  if (id === null || id === undefined) {
    throw new Error(
      [
        'The data grid component requires all rows to have a unique id property.',
        'A row was provided without id in the rows prop:',
        JSON.stringify(row),
      ].join('\n'),
    );
  }
};

const getGridRowId = (row, index, getRowId) => {
  const id = getRowId ? getRowId(row, index) : row.id;
  checkGridRowIdIsValid(id, row);
  return id;
};

const sortRows = (rows, sort) => {
  if (sort.field && sort.order && sort.order !== 'none') {
    const sortedRows = [...rows];
    sortedRows.sort((rowA, rowB) => {
      const { field, order } = sort;
      switch (order) {
        case 'ascending':
          return rowA.data[field] > rowB.data[field] ? 1 : -1;
        case 'descending':
          return rowA.data[field] < rowB.data[field] ? 1 : -1;
        case 'none':
        default:
          return 0;
      }
    });
    return sortedRows;
  }
  return rows;
};

export const prepareRows = (rows, getRowId, sort) => {
  return sortRows(
    rows.map((row, index) => {
      const id = getGridRowId(row, index, getRowId);
      return {
        id,
        data: row,
      };
    }),
    sort,
  );
};
