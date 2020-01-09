import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = props => (
  console.log('orderform props', props),
  <Grid>
    <Row>
      {pricing.map(option =>
        <Col key={option.id} md={4}>
          {console.log('option.id', option.id)}
          <OrderOption {...option} />
        </Col>
      )}
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
