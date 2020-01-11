import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({setOrderOption, options, tripCost}) => (
  <Grid>
    <Row>
      {pricing.map(option => (
        <Col key={option.id} md={4}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} tripOptions={options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
