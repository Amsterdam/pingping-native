import React from 'react';
import CityPingsHomeScreen from '../src/screens/CityPingsHomeScreen';
import renderer from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <CityPingsHomeScreen navigation={navigation} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
