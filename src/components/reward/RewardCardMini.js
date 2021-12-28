import React, {memo} from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import routes from '../../App/stacks/routes';
import theme from '../../config/theme';
import normalizeValue from '../../helpers/normalizeValue';
import Card from '../shared/Card';
import Body from '../typography/Body';
import Title from '../typography/Title';

const RewardCardMini = ({
	navigation,
	reward: {price, description, title, rewardId, cover, status},
	balance,
}) => {
	const doNavigation = () => {
		navigation.navigate(routes.citypingsStack.name, {
			screen: routes.citypingsStack.rewardDetailModalScreen,
			initial: false,
			params: {
				price,
				balance,
				description,
				title,
				rewardId,
				cover,
			},
		});
	};

	return (
		<Card
			onPress={doNavigation}
			cover={cover}
			pings={price}
			style={styles.card}
			disabled={status === 'NotAvailable'}
			mini>
			<View style={styles.descriptionContainer}>
				<Title variant="h7" numberOfLines={2} ellipsizeMode="tail">
					{title}
				</Title>
				<Body
					variant="b4"
					numberOfLines={2}
					ellipsizeMode="tail"
					style={styles.cardFont}>
					{description}
				</Body>
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		width: '45%',
	},
	cardFont: {
		marginTop: theme.spacing.m,
		lineHeight: normalizeValue(20),
	},
});

RewardCardMini.propTypes = {
	navigation: PropTypes.object.isRequired,
	reward: PropTypes.object.isRequired,
	balance: PropTypes.number.isRequired,
};

export default memo(RewardCardMini);
