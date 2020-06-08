import React from 'react';
import RouteHomeScreen from '../src/screens/RouteHomeScreen';
import {InMemoryCache} from '@apollo/client';
import {MockedProvider} from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import GET_MODAL_STATE from '../src/apollo/Query/getModalState';

const cache = new InMemoryCache({addTypename: false});
cache.writeQuery({
  query: GET_MODAL_STATE,
  data: {
    pings: 1,
    modalOpen: false,
  },
});

const stateMock = {
  request: {
    query: GET_MODAL_STATE,
  },
  result: {
    data: {modalOpen: true, pings: 2},
  },
};

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[stateMock]} cache={cache} addTypename={false}>
        <RouteHomeScreen />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
