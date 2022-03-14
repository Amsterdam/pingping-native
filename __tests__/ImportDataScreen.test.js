import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import { NativeBaseProvider } from 'native-base';
import ShallowRenderer from 'react-test-renderer/shallow';

import ImportDataScreen from '../src/screens/ImportDataScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const renderer = new ShallowRenderer();
	const tree = renderer.render(
		<NativeBaseProvider>
			<MockedProvider mocks={[]}>
				<ImportDataScreen
					navigation={navigation}
				/>
			</MockedProvider>
		</NativeBaseProvider>,
	);

	expect(tree).toMatchSnapshot();
});
