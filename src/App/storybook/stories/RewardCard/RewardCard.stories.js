import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { ScrollView } from 'react-native';

import RewardCard from '../../../../components/reward/RewardCard';
import Container from '../../../../components/shared/Container';
import CenterView from '../CenterView';

storiesOf('Rewardcard', module)
	.addDecorator((getStory) => (
		<Container>
			<ScrollView>{getStory()}</ScrollView>
		</Container>
	))
	.add('Enabled Rewardcard', () => (
		<>
			<RewardCard
				navigation={() => {}}
				reward={{
					price: 100,
					description: 'none',
					title: 'none',
					rewardId: 'a rewrd',
					cover: 'ada',
					status: 'active',
				}}
				data={{ pin: '', code: '', expiryDate: '01-01-2021' }}
				balance={0}
				claimed={false}
			/>
			<RewardCard
				navigation={() => {}}
				reward={{
					price: 100,
					description: 'none',
					title: 'none',
					rewardId: 'a rewrd',
					cover: 'ada',
					status: 'active',
				}}
				data={{ pin: '', code: '', expiryDate: '01-01-2021' }}
				balance={50}
				claimed
			/>
			<RewardCard
				navigation={() => {}}
				reward={{
					price: 150,
					description: 'none',
					title: 'none',
					rewardId: 'a rewrd',
					cover: 'ada',
					status: 'NotAvailable',
				}}
				data={{ pin: '', code: '', expiryDate: '01-01-2021' }}
				balance={100}
			/>
		</>
	));
