import React from 'react';

import { withKnobs, number, object } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import ContentLayout from '../../../components/layout/ContentLayout';
import LottieCelebration from '../../../components/reward/LottieCelebration';
import RewardCardMini from '../../../components/reward/RewardCardMini';
import theme from '../../../config/theme';

const reward = {
	__typename: 'RewardResponse',
	cover: {
		__typename: 'Media',
		color: '#F5C74D',
		thumbnail: '/images/reward2Thumb.jpg',
		type: 'Image',
		value: '/images/reward2.jpg',
	},
	description:
		'Gefeliciteerd! Jij bent lekker bezig! Claim deze Pathé thuisbioscoopbon als welverdiende beloning!',
	price: 140,
	rewardId: 'pathe-thuis-film-rotterdam',
	status: 'AvailableToClaim',
	title: 'Pathe Thuis Film',
};

storiesOf('Celebration Screen', module)
	.addDecorator(withKnobs)
	.addDecorator((getStory) => (
		<ContentLayout style={{ backgroundColor: theme.colors.primary }}>
			{getStory()}
		</ContentLayout>
	))
	.add('Confetti', () => (
		<LottieCelebration balance={number('Balance', 10)} pings={number('pings', 10)} />
	))
	.add('Mini Rewardcard', () => (
		<RewardCardMini
			navigation={{ navigate: () => {} }}
			reward={object('Reward', reward)}
			key="some reward"
			balance={number('balance', 100)}
		/>
	));
