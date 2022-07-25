import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import RouteFeedbackScreen from '../src/screens/RouteFeedbackScreen';

jest.useFakeTimers();
const navigation = {
	navigate: jest.fn(),
	addListener: jest.fn(),
};

test('renders correctly', () => {
	const tree = renderer
		.create(
			<MockedProvider mocks={[]}>
				<RouteFeedbackScreen route={{}} navigation={navigation} />
			</MockedProvider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
