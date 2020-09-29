import React from 'react';
import AccountHomeScreen from '../src/screens/AccountHomeScreen';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
  const tree = renderer
    .create(<AccountHomeScreen navigation={navigation} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
