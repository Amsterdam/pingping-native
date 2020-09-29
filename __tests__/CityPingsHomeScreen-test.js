import React from 'react';
import CityPingsHomeScreen from '../src/screens/CityPingsHomeScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(<CityPingsHomeScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
