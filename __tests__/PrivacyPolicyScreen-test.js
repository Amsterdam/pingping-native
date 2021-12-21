import React from 'react';

import {MockedProvider} from '@apollo/client/testing';
import renderer from 'react-test-renderer';

import PrivacyPolicyScreen from '../src/screens/PrivacyPolicyScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};

test('renders correctly', () => {
	const tree = renderer
		.create(
			<MockedProvider mocks={[]}>
				<PrivacyPolicyScreen navigation={navigation} />
			</MockedProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
