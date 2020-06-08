import React from 'react';
import KasboekAddGoalScreen from '../src/screens/KasboekAddGoalScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<KasboekAddGoalScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
