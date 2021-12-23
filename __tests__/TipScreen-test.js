import React from 'react';

import {NativeBaseProvider} from 'native-base';
import renderer from 'react-test-renderer';

import TipScreen from '../src/screens/TipScreen';

jest.useFakeTimers();
const navigation = {navigate: jest.fn()};
const route = {params: {tips: []}};

test('renders correctly', () => {
	const tree = renderer
		.create(
			<NativeBaseProvider>
				<TipScreen navigation={navigation} route={route} />
			</NativeBaseProvider>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
