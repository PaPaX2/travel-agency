import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/setting';
import Button from '../../common/Button/Button';



const sendOrder = (trip, place, tripId, options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    trip,
    place,
    tripId,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const isValid = (trip, place, tripId, options, tripCost) => {
  const { name, contact } = options;
  if (name !== '' && contact !== '') {
    sendOrder(trip, place, tripId, options, tripCost);
  } else { window.alert('Fill name and contact fields in'); }
};

const OrderForm = ({trip, place, tripId, setOrderOption, options, tripCost}) => (
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
      <Button onClick={() => isValid(trip, place.alpha3Code, tripId, options, tripCost)}>Order now!</Button>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  trip: PropTypes.string,
  place: PropTypes.object,
  tripId: PropTypes.string,
};

export default OrderForm;
