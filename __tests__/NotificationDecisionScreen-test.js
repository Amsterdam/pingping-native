import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';

import NotificationDecisionScreen from '../src/screens/NotificationDecisionScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};
const setLogin = jest.fn();

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<MockedProvider mocks={[]}>
					<NotificationDecisionScreen
						navigation={navigation}
						setLogin={setLogin}
					/>
				</MockedProvider>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
