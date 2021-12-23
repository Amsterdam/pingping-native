import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';

import GET_STATUS_QUERY from '../src/apollo/Query/getStatusQuery';
import OnboardingScreen from '../src/screens/OnboardingScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

const mocks = [
	{
		request: {
			query: GET_STATUS_QUERY,
		},
		result: undefined,
	},
];

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<MockedProvider mocks={mocks}>
					<OnboardingScreen navigation={navigation} />
				</MockedProvider>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
