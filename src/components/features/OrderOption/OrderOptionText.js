import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({name}) => (
  <div>
    <input
      className={styles}
      type="text"
      value={name}
    >
    </input>
  </div>
);

OrderOptionText.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionText;
