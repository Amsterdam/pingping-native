import React from 'react';
import KasboekAddGoalScreen from '../src/screens/KasboekAddGoalScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(<KasboekAddGoalScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
