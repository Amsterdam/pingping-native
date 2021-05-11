import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import ShallowRenderer from 'react-test-renderer/shallow';

import ImportDataScreen from '../src/screens/ImportDataScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const renderer = new ShallowRenderer();
  const tree = renderer.render(
    <MockedProvider mocks={[]}>
      <ImportDataScreen navigation={navigation} />
    </MockedProvider>,
  );

  expect(tree).toMatchSnapshot();
});
