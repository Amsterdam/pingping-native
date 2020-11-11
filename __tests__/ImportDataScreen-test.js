import React from 'react';
import ImportDataScreen from '../src/screens/ImportDataScreen';
import renderer from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <ImportDataScreen navigation={navigation} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
