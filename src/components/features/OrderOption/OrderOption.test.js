import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component Order Option', () => {
  it('should render component', () => {
    const expectedType = 'icons';
    const expectedName = 'Accomodation';
    const component = shallow(<OrderOption type={expectedType} name={expectedName}/>);
    expect(component).toBeTruthy();
  });
});
