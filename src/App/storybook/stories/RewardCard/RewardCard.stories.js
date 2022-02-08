import React from 'react';

import { storiesOf } from '@storybook/react-native';

import ContentLayout from '../../../../components/layout/ContentLayout';
import RewardCard from '../../../../components/reward/RewardCard';
import Container from '../../../../components/shared/Container';

const reward = {
	price: 140,
	description:
		'Gefeliciteerd! Jij bent lekker bezig! Claim deze Pathé thuisbioscoopbon als welverdiende beloning!',
	title: 'Pathe Thuis Film',
	rewardId: 'pathe-thuis-film-rotterdam',
	cover: {
		__typename: 'Media',
		color: '#F5C74D',
		thumbnail: '/images/reward2Thumb.jpg',
		type: 'Image',
		value: '/images/reward2.jpg',
	},
	status: 'Available',
};

const data = { pin: '', code: '', expiryDate: '01-01-2021' };

storiesOf('Rewardcard', module)
	.addDecorator((getStory) => (
		<Container>
			<ContentLayout>{getStory()}</ContentLayout>
		</Container>
	))
	.add('Enabled Rewardcard', () => (
		<RewardCard reward={reward} data={data} balance={0} navigation={() => {}} claimed={false} />
	))
	.add('Disabled RewardCard', () => (
		<RewardCard
			navigation={() => {}}
			balance={100}
			reward={{ ...reward, status: 'NotAvailable' }}
			data={data}
			claimed={false}
		/>
	))
	.add('Claimed RewardCard', () => (
		<RewardCard
			navigation={() => {}}
			balance={100}
			reward={{ ...reward, status: 'Available' }}
			data={data}
			claimed
		/>
	));
