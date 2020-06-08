import React from 'react';
import TaskScreen from '../src/screens/TaskScreen';
import {MockedProvider} from '@apollo/client/testing';
import renderer from 'react-test-renderer';

const task = {title: 'A title', description: 'a description'};

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MockedProvider mocks={[]}>
        <TaskScreen route={{params: {task}}} />
      </MockedProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
