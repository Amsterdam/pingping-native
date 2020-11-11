import React from 'react';
import ExportDataScreen from '../src/screens/ExportDataScreen';
import renderer from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <ExportDataScreen navigation={navigation} setLogOut={() => {}} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
