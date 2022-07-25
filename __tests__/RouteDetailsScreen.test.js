import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import RouteDetailScreen from '../src/screens/RouteDetailsScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const tree = renderer
		.create(
			<MockedProvider mocks={[]}>
				<RouteDetailScreen navigation={navigation} route={{ params: { routeId: 1 } }} />
			</MockedProvider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
