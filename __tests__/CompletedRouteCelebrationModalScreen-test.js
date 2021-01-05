import React from 'react';
import CompletedRouteCelebrationModalScreen from '../src/screens/CompletedRouteCelebrationModalScreen';
import ShallowRenderer from 'react-test-renderer/shallow';
import {MockedProvider} from '@apollo/client/testing';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <MockedProvider mocks={[]}>
      <CompletedRouteCelebrationModalScreen
        navigation={navigation}
        route={{params: {pings: 0}}}
      />
    </MockedProvider>,
  );

  expect(tree).toMatchSnapshot();
});
