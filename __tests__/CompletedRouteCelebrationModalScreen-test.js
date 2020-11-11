import React from 'react';
import CompletedRouteCelebrationModalScreen from '../src/screens/CompletedRouteCelebrationModalScreen';
import renderer from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <CompletedRouteCelebrationModalScreen
          navigation={navigation}
          route={{params: {pings: 50}}}
        />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
