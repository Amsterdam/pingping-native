import React from 'react';
import ImportRouteScreen from '../src/screens/ImportRouteScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ImportRouteScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
