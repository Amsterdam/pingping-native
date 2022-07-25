import React from 'react';

import renderer from 'react-test-renderer';

import AccountHomeScreen from '../src/screens/AccountHomeScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const tree = renderer.create(<AccountHomeScreen navigation={navigation} />).toJSON();
	expect(tree).toMatchSnapshot();
});
