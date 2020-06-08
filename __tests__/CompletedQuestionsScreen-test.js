import React from 'react';
import CompletedQuestionsScreen from '../src/screens/CompletedQuestionsScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<CompletedQuestionsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
