export const getVirtualized = ({ height, scrollTop, rows }) => {
  let virtualizedRows = [];
  let beginHeight = 0;
  let endHeight = 0;

  rows.reduce((acc, row) => {
    const itemHeight = 40;
    if (acc >= scrollTop - itemHeight) {
      if (height >= -(itemHeight * 5)) {
        height = height - itemHeight;
        virtualizedRows.push(row);
      } else {
        endHeight += itemHeight;
      }
    } else {
      beginHeight = acc + itemHeight;
    }
    return acc + itemHeight;
  }, 0);

  return {
    beginHeight,
    endHeight,
    virtualizedRows,
  };
};
