import React from 'react';

import renderer from 'react-test-renderer';

import TipScreen from '../src/screens/TipScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};
const route = {params: {tips: []}};

test('renders correctly', () => {
	const tree = renderer
		.create(<TipScreen navigation={navigation} route={route} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
