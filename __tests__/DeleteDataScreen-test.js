import React from 'react';
import DeleteDataScreen from '../src/screens/DeleteDataScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<DeleteDataScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
