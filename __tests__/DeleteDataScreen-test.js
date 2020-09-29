import React from 'react';
import renderer from 'react-test-renderer';
import DeleteDataScreen from '../src/screens/DeleteDataScreen';
import {MockedProvider} from '@apollo/client/testing';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};
const setLogOut = jest.fn();

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <DeleteDataScreen navigation={navigation} setLogOut={setLogOut} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
