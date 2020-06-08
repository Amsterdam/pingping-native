import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import QuestionScreen from '../src/screens/QuestionScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <QuestionScreen />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
