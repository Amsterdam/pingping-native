import React from 'react';
import KasboekHomeScreen from '../src/screens/KasboekHomeScreen';

import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(<KasboekHomeScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
