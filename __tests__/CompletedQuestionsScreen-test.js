import React from 'react';
import CompletedQuestionsScreen from '../src/screens/CompletedQuestionsScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CompletedQuestionsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
