import React from 'react';
import Button from './';
import { shallow } from 'enzyme';

it('renders as expected', () => {
  const component = shallow(<Button text='Hello World' onClick={() => {}} />);
  expect(component).toMatchSnapshot();
});

it('Test click event', () => {
  const mockCallBack = jest.fn();
  const button = shallow(<Button onClick={mockCallBack} text='Ok!' />);
  button.find('button').simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
