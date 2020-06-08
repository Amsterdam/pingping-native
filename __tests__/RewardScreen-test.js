import React from 'react';
import RewardScreen from '../src/screens/RewardScreen';

import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<RewardScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
