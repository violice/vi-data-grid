# vi-data-grid

Data grid component for react

## Installation

npm

```sh
npm i -s vi-data-grid
```

yarn

```sh
yarn add vi-data-grid
```

## Usage

```js
import { DataGrid } from 'vi-data-grid'; 
import 'vi-data-grid/dist/style.csss'; 

const columns = [
  { header: 'Name', field: 'name' },
  { header: 'Age', field: 'age' },
];

const rows = [
  { id: 1, name: 'John', age: 35 },
  { id: 2, name: 'Katty', age: 21 },
];

const TestComponent = () => {
  return (
    <DataGrid 
      columns={columns}
      rows={rows}
    />
  );
};
```
