import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionCheckboxes = (props) => (
  <div>{props.currentValue}</div>
);

OrderOptionCheckboxes.propTypes = {
  currentValue: PropTypes.array,
};

export default OrderOptionCheckboxes;
