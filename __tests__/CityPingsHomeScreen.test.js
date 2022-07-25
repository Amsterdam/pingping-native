import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import CityPingsHomeScreen from '../src/screens/CityPingsHomeScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const tree = renderer
		.create(
			<MockedProvider mocks={[]}>
				<CityPingsHomeScreen navigation={navigation} />
			</MockedProvider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
