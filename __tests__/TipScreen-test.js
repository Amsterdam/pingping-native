import React from 'react';
import TipScreen from '../src/screens/TipScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};
const route = {params: {tips: []}};

test('renders correctly', () => {
  const tree = renderer
    .create(<TipScreen navigation={navigation} route={route} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
