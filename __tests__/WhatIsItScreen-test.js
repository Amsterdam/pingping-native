import React from 'react';
import WhatIsItScreen from '../src/screens/WhatIsItScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<WhatIsItScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
