import React from 'react';
import CityPingsHomeScreen from '../src/screens/CityPingsHomeScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<CityPingsHomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
