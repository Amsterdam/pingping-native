import React from 'react';
import YourRouteScreen from '../src/screens/YourRouteScreen';
import renderer from 'react-test-renderer';

const route = {params: {tasks: []}};

test('renders correctly', () => {
  const tree = renderer.create(<YourRouteScreen route={route} />).toJSON();
  expect(tree).toMatchSnapshot();
});
