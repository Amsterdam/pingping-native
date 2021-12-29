import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import { NativeBaseProvider } from 'native-base';
import renderer from 'react-test-renderer';

import PrivacyPolicyScreen from '../src/screens/PrivacyPolicyScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<MockedProvider mocks={[]}>
					<PrivacyPolicyScreen
						navigation={navigation}
					/>
				</MockedProvider>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
