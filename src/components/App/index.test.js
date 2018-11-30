import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './';

it('renders as expected', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
