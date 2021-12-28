import React, {memo} from 'react';

import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import FeedbackCard from './FeedBackCard';
import TrophyOrProgress from './TrophyOrProgress';

import {testIDs} from '../../../e2e/modulesTestIDs';
import routes from '../../App/stacks/routes';
import theme from '../../config/theme';
import Card from '../shared/Card';
import Body from '../typography/Body';
import Title from '../typography/Title';

const RouteCard = ({
	navigation,
	route: {
		routeId,
		totalPoints,
		targetAudience,
		title,
		description,
		numberOfSteps,
		progress,
		cover,
		hasSubmittedFeedback,
	},
}) => {
	const doNavigation = route => () => {
		navigation.navigate(route, {
			routeId,
			cover,
		});
	};
	const routeDisabled = numberOfSteps === 0;

	return (
		<React.Fragment>
			<Card
				onPress={doNavigation(routes.routeStack.routeDetailsScreen)}
				pings={totalPoints}
				cover={cover}
				testID={testIDs.ROUTES.ROUTE_CARD}
				disabled={routeDisabled}
				disabledString="Deze route is nog niet beschikbaar">
				<Body variant="b3" style={styles.rewardType}>
					{targetAudience}
				</Body>
				<Title style={styles.title} variant="h3">
					{title}
				</Title>
				<Body
					variant="b3"
					style={styles.description}
					ellipsizeMode="tail"
					numberOfLines={3}>
					{description}
				</Body>
				<View style={styles.balanceContainer}>
					<View style={styles.saldo}>
						<Body variant="b3" style={styles.savings}>
							{numberOfSteps} stappen
						</Body>
					</View>
					<TrophyOrProgress progress={progress} />
				</View>
			</Card>
			{progress === 1 && !hasSubmittedFeedback && (
				<FeedbackCard
					onPress={doNavigation(routes.routeStack.routeFeedbackScreen)}
				/>
			)}
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	title: {
		marginBottom: theme.spacing.s,
	},
	rewardType: {
		color: theme.colors.primary,
		marginBottom: theme.spacing.m,
	},
	savings: {
		color: theme.colors.subtleGrey,
	},
	balanceContainer: {
		marginTop: theme.spacing.l,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	saldo: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

RouteCard.propTypes = {
	navigation: PropTypes.object.isRequired,
	route: PropTypes.object.isRequired,
};

export default memo(RouteCard);
