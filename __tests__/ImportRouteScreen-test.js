import React from 'react';
import ImportDataScreen from '../src/screens/ImportDataScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<ImportDataScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
