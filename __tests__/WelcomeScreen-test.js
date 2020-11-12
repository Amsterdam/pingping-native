import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <WelcomeScreen navigation={navigation} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
