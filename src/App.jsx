import React from 'react';
import { DataGrid } from './DataGrid';
import { generateColumns, generateRows } from './helpers';

const columns = generateColumns();
const rows = generateRows();

const App = () => {
  return (
    <div className="App">
      <DataGrid isVirtualized columns={columns} rows={rows} />
    </div>
  );
};

export default App;
