import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';

import RewardDetailModalScreen from '../src/screens/RewardDetailModalScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<MockedProvider mocks={[]}>
					<RewardDetailModalScreen
						navigation={navigation}
						route={{
							params: {
								price: 10,
								title: 'test',
								description: '123123',
								rewardId: '1231',
								cover: {},
							},
						}}
					/>
				</MockedProvider>
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
