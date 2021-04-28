import PropTypes from 'prop-types';

export const ColumnPropType = PropTypes.shape({
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

  getRowId: PropTypes.func,
});

export const RowPropType = PropTypes.shape({
  id: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
  data: PropTypes.object.isRequired,
});
