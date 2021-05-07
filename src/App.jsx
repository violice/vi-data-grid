import React from 'react';
import { DataGrid } from './DataGrid';
import { generateColumns, generateRows } from './helpers';

const columns = generateColumns();
const rows = generateRows();

const App = () => {
  return (
    <div className="App">
      <DataGrid
        isVirtualized
        columns={columns}
        rows={rows}
        pagesCount={10}
        rowMenu={[
          {
            key: 'copy',
            label: 'Copy',
            icon: <span>[C]</span>
          },
        ]}
        onRowMenuItemClick={e => console.log(e)}
      />
    </div>
  );
};

export default App;
