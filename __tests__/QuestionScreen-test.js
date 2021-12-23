import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';

import QuestionScreen from '../src/screens/QuestionScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<MockedProvider mocks={[]}>
					<QuestionScreen navigation={navigation} />
				</MockedProvider>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
