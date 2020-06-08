import React from 'react';
import PrivacyPolicyScreen from '../src/screens/PrivacyPolicyScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<PrivacyPolicyScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
