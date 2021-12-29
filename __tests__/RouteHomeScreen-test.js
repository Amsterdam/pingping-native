import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import { NativeBaseProvider } from 'native-base';
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
			<NativeBaseProvider>
				<MockedProvider mocks={[]}>
					<RouteHomeScreen
						navigation={navigation}
					/>
				</MockedProvider>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
