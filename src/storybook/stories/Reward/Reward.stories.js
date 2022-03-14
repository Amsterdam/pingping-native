import React from 'react';

import { withKnobs, object, number, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import ContentLayout from '../../../components/layout/ContentLayout';
import RewardCard from '../../../components/reward/RewardCard';
import Container from '../../../components/shared/Container';

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

storiesOf('Reward', module)
	.addDecorator(withKnobs)
	.addDecorator((getStory) => (
		<Container>
			<ContentLayout>{getStory()}</ContentLayout>
		</Container>
	))
	.add('Enabled Rewardcard', () => (
		<RewardCard
			reward={object('reward', reward)}
			data={object('data', data)}
			balance={number('balance', 25)}
			navigation={{}}
			claimed={boolean('claimed', false)}
		/>
	))
	.add('Claimed RewardCard', () => (
		<RewardCard
			navigation={{}}
			balance={100}
			reward={{ ...reward, status: 'Available' }}
			data={data}
			claimed
		/>
	))
	.add('Disabled RewardCard', () => (
		<RewardCard
			navigation={{}}
			balance={100}
			reward={{ ...reward, status: 'NotAvailable' }}
			data={data}
			claimed={false}
		/>
	));
