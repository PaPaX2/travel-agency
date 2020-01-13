import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link with correct adres', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should generate <img> with correct src and alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'image';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should correctly gnerate props name, cost, days', () => {
    const expectedName = 'Marvelous...';
    const expectedCost ='$129,701.23';
    const expectedDays = '7';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays}/>);
    const renderedCost = 'from $129,701.23';
    const renderedDays = '7 days';
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').children().first().text()).toEqual(renderedDays);
    expect(component.find('.details span').children().last().text()).toEqual(renderedCost);
  });

  it('should give error when one of the props is missed', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags i proper order', () => {
    const tagArray = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={tagArray} />);
    for (let i = 0; i < tagArray.length; i++) {
      expect(component.find('.tag').at(i).text()).toEqual(tagArray[i]); //dlaczego text a nie prop('tags')
    }
  });
/*
  it('shall not be rendered div with class tag when prop tags is empty or does not exist', () => {
    const component = shallow(<TripSummary />);
    expect(component.find('tags')).toEqual({});
  });
  */
});

//typeof tags !== 'undefined' &&
