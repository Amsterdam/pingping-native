import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';

import DeleteDataScreen from '../src/screens/DeleteDataScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};
const setLogOut = jest.fn();

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<MockedProvider mocks={[]}>
					<DeleteDataScreen navigation={navigation} setLogOut={setLogOut} />
				</MockedProvider>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
