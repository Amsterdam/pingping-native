import React from 'react';
import ExportDataScreen from '../src/screens/ExportDataScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<ExportDataScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
