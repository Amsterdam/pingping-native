import React from 'react';
import ExportDataScreen from '../src/screens/ExportDataScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(<ExportDataScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
