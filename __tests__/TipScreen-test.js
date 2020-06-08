import React from 'react';
import TipScreen from '../src/screens/TipScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<TipScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
