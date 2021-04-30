const COLUMNS_COUNT = 10;
const ROWS_COUNT = 10000;

export const generateColumns = () => {
  const columns = [];

  for (let j = 0; j < COLUMNS_COUNT; j++) {
    const col = {
      header: `header-${j}`,
      field: `field-${j}`,
    };

    if ([0, 1].includes(j)) {
      col.isEditable = true;
      col.isSortable = true;
      col.isSticky = true;

      col.columns = [
        { ...col, field: `field-${j}-0` },
        { ...col, field: `field-${j}-1` },
      ];
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
      row[`field-${j}-0`] = `row-${i}__field-${j}-0`;
      row[`field-${j}-1`] = `row-${i}__field-${j}-1`;
    }
    data.push(row);
  }

  return data;
};
