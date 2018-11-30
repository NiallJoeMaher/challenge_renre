import React from 'react';
import { shallow } from 'enzyme';

import WeatherCard from './';

it('renders as expected', () => {
  const component = shallow(
    <WeatherCard date='26 Jan 2018' day='Thur' highValue='100' lowValue='1' />
  );
  expect(component).toMatchSnapshot();
});
