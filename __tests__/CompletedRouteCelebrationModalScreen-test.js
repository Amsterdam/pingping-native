import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import { NativeBaseProvider } from 'native-base';
import ShallowRenderer from 'react-test-renderer/shallow';

import CompletedRouteCelebrationModalScreen from '../src/screens/CompletedRouteCelebrationModalScreen';

jest.useFakeTimers();
const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
	const renderer = new ShallowRenderer();
	const tree = renderer.render(
		<NativeBaseProvider>
			<MockedProvider mocks={[]}>
				<CompletedRouteCelebrationModalScreen
					navigation={navigation}
					route={{ params: { pings: 0 } }}
				/>
			</MockedProvider>
		</NativeBaseProvider>,
	);

	expect(tree).toMatchSnapshot();
});
