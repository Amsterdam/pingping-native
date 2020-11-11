import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import NotificationDecisionScreen from '../src/screens/NotificationDecisionScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <NotificationDecisionScreen navigation={navigation} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
