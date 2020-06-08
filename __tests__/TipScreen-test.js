import React from 'react';
import TipScreen from '../src/screens/TipScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<TipScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
