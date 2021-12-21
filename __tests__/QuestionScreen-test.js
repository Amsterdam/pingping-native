import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import QuestionScreen from '../src/screens/QuestionScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
	const tree = renderer
		.create(
			<MockedProvider mocks={[]}>
				<QuestionScreen navigation={navigation} />
			</MockedProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
