import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = props => (
  console.log('orderform props', props),
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={props.tripCost} tripOptions={props.options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
