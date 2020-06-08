import React from 'react';
import LandingScreen from '../src/screens/LandingScreen';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<LandingScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
