import React from 'react';

import { NativeBaseProvider } from 'native-base';
import renderer from 'react-test-renderer';

import AccountHomeScreen from '../src/screens/AccountHomeScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<AccountHomeScreen
					navigation={navigation}
				/>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
