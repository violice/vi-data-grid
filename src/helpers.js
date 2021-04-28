const COLUMNS_COUNT = 20;
const ROWS_COUNT = 10000;

export const generateColumns = () => {
  const columns = [];

  for (let j = 0; j < COLUMNS_COUNT; j++) {
    const col = {
      header: `header-${j}`,
      field: `field-${j}`,
      flex: 1,
    };

    if ([0, 1].includes(j)) {
      col.isEditable = true;
      col.isSortable = true;
      col.isSticky = true;
    }

    columns.push(col);
  }

  return columns;
};

export const generateRows = () => {
  const data = [];

  for (let i = 0; i < ROWS_COUNT; i++) {
    const row = { id: i };
    for (let j = 0; j < COLUMNS_COUNT; j++) {
      row[`field-${j}`] = `row-${i}__field-${j}`;
    }
    data.push(row);
  }

  return data;
};
