import React from 'react';
import KasboekHomeScreen from '../src/screens/KasboekHomeScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<KasboekHomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
