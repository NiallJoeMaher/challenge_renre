import React from 'react';
import { shallow } from 'enzyme';

import Switch from './';

it('renders as expected', () => {
  const component = shallow(
    <Switch
      leftLabel='&deg;C'
      rightLabel='&deg;F'
      onClick={() => {}}
      on={false}
    />
  );
  expect(component).toMatchSnapshot();
});

it('renders as on as expected', () => {
  const component = shallow(
    <Switch
      leftLabel='&deg;C'
      rightLabel='&deg;F'
      onClick={() => {}}
      on={true}
    />
  );
  expect(component).toMatchSnapshot();
});

it('Test click event', () => {
  const mockCallBack = jest.fn();
  const button = shallow(
  <Switch
    leftLabel='&deg;C'
    rightLabel='&deg;F'
    onClick={mockCallBack}
    on={true}
  />);
  button.find('.c-Switch__toggle-input').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
