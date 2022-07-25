import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import RouteHomeScreen from '../src/screens/RouteHomeScreen';

jest.useFakeTimers();
const navigation = {
	navigate: jest.fn(),
	addListener: jest.fn(),
};

test('renders correctly', () => {
	const tree = renderer
		.create(
			<MockedProvider mocks={[]}>
				<RouteHomeScreen navigation={navigation} />
			</MockedProvider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
