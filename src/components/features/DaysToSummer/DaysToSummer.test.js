import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  counter: '.counter',
};

const mockProps = {
  title: 'Happy Hour',
  daysToSummer: '10',
};

const trueDate = Date;
const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getDate();
  }
};

const checkDaysLeftCalculation = (date, expectedDescription) => {
  it('should show correct days number left to summer', () => {

    global.Date = mockDate(`${date}T11:57:58.135Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;

  });
};

describe('Component DaysToSummer mocked Date', () => {
  checkDaysLeftCalculation('2020:06:20', '1');
  checkDaysLeftCalculation('2020:01:01', '173');
  checkDaysLeftCalculation('2019:09:22', '273');
});

/*
const checkDescriptionAtDate = (date) => {
  it(`should not show anything at summer time ${date}`, () => {
    global.Date = mockDate(`${date}T11:57:58.135Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(null);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2020:06:21');
  checkDescriptionAtDate('2020:07:21');
  checkDescriptionAtDate('2020:09:23');
});

const checkDescriptionAfterDate = (daysLeft, expectedDescription) => {
  it(`should show correct value ${daysLeft}`, () => {
    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedCounter = component.find(select.promoDescription).text();
    expect(renderedCounter).toEqual(expectedDescription);

  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterDate( 1, '1 day left');
  checkDescriptionAfterDate( 4, '4 days left');
  checkDescriptionAfterDate(300, '300 days left' );
});
*/
