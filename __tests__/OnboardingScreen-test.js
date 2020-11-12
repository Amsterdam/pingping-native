import React from 'react';
import {MockedProvider} from '@apollo/client/testing';
import OnboardingScreen from '../src/screens/OnboardingScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <OnboardingScreen navigation={navigation} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
