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

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should show title from props name', () => {
    const expectedTitle = 'Accomodation';
    const typeArray = ['type1', 'type2', 'type3', 'type4', 'type5', 'type6'];
    const component = shallow(<OrderOption type={'tekst'} name={expectedTitle} component={typeArray}/>);
    expect(component.find('.title').text()).toEqual(expectedTitle);
  });
});
