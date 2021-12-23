import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';

import ExportDataScreen from '../src/screens/ExportDataScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<MockedProvider mocks={[]}>
					<ExportDataScreen navigation={navigation} setLogOut={() => {}} />
				</MockedProvider>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
