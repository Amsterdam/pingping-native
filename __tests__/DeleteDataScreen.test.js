import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import DeleteDataScreen from '../src/screens/DeleteDataScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const tree = renderer
		.create(
			<MockedProvider mocks={[]}>
				<DeleteDataScreen navigation={navigation} />
			</MockedProvider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
