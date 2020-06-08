import React from 'react';
import ClaimRewardScreen from '../src/screens/ClaimRewardScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<ClaimRewardScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
