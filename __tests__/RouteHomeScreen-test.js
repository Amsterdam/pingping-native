import React from 'react';
import RouteHomeScreen from '../src/screens/RouteHomeScreen';
import {MockedProvider} from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import GET_MODAL_STATE from '../src/apollo/Query/getModalState';

const stateMock = {
  request: {
    query: GET_MODAL_STATE,
  },
  result: {
    data: {modalOpen: true, pings: 2},
  },
};
test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[stateMock]} addTypename={false}>
        <RouteHomeScreen />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
