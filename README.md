# vi-data-grid

Data grid component for react

## Usage

```js
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
