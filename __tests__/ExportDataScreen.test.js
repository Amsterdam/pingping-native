import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import ExportDataScreen from '../src/screens/ExportDataScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const tree = renderer
		.create(
			<MockedProvider mocks={[]}>
				<ExportDataScreen navigation={navigation} />
			</MockedProvider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
