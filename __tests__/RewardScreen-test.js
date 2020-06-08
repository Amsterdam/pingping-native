import React from 'react';
import RewardScreen from '../src/screens/RewardScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<RewardScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
