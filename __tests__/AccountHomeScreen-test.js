import React from 'react';
import AccountHomeScreen from '../src/screens/AccountHomeScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<AccountHomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
