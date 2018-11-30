import React from 'react';
import { shallow } from 'enzyme';

import { WeatherForecast } from './';

const mockForecastArray = [{
    "code": "39",
    "date": "30 Nov 2018",
    "day": "Fri",
    "high": "7",
    "low": "5",
    "text": "Scattered Showers"
  },
  {
    "code": "39",
    "date": "1 Dec 2018",
    "day": "Sat",
    "high": "7",
    "low": "5",
    "text": "Scattered Showers"
  },
  {
    "code": "29",
    "date": "2 Dec 2018",
    "day": "Sun",
    "high": "7",
    "low": "5",
    "text": "Scattered Showers"
  },
  {
    "code": "39",
    "date": "3 Dec 2018",
    "day": "Mon",
    "high": "7",
    "low": "5",
    "text": "Scattered Showers"
  },

]

import initialState from '../../reducers/initialState';
it('renders as expected with default params', () => {
  const component = shallow(
    <WeatherForecast {...initialState} fetchForecast={() => {}} />
  );
  expect(component).toMatchSnapshot();
});

it('renders as expected with forecast params', () => {
  const component = shallow(
    <WeatherForecast  
      {...initialState}
      forecast={mockForecastArray}
      fetchForecast={() => {}} 
    />
  );
  expect(component).toMatchSnapshot();
});

it('renders as expected with error', () => {
  const component = shallow(
    <WeatherForecast
      {...initialState}
      fetchForecast={() => {}}
      hasErrored={true}
    />
  );
  expect(component).toMatchSnapshot();
});
