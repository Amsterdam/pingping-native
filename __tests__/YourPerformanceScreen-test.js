import React from 'react';
import YourPerformanceScreen from '../src/screens/YourPerformanceScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<YourPerformanceScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
