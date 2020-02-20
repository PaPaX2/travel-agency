import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
  counter: '.counter',
};

const mockProps = {
  title: 'days to summer',
  lastDay: 'day to summer',
  counter: '10',
};

const datesToCheck = {
  '2019-06-19': 2 + ' days to summer', //170,
  '2019-06-20': 1 + ' day to summer', //171,
  '2019-09-23': 272 + ' days to summer', //266,
  '2019-12-31': 173 + ' days to summer', //365,
  '2020-01-01': 172 + ' days to summer', //1,
  '2020-06-19': 2 + ' days to summer', //171,
  '2020-06-20': 1 + ' day to summer', //172,
  '2020-09-23': 271 + ' days to summer', //267,
  '2020-12-31': 172 + ' days to summer', //366,
  '2019-07-30': '',
  '2019-06-21': '', //172,
  '2019-09-22': '', //265,
  '2020-06-21': '', //173,
  '2020-09-22': '', //266,
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

describe('Component DaysToSummer mocked Date', () => {
  for (let day in datesToCheck ) {
    const days = datesToCheck[day];

    it(`should show correct days number left to summer for ${day}`, () => {

      global.Date = mockDate(`${day}T15:00:00.000Z`);

      const component = shallow(<DaysToSummer {...mockProps} />);
      const renderedTime = component.find(select.counter).text();
      expect(renderedTime).toEqual(days);

      global.Date = trueDate;

    });
  }
});

describe('Component DaysToSummer with mocked Date', () => {
  it(`should not show anything at summer time ${datesToCheck[10]}`, () => {
    global.Date = mockDate(`${datesToCheck[10]}T11:57:58.135Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedTime = component.find(select.counter).text();
    expect(renderedTime).toEqual('');

    global.Date = trueDate;
  });
});
