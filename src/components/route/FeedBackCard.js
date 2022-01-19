import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import testIDs from '../../../e2e/modulesTestIDs';
import FeedbackIcon from '../../assets/svg/FeedbackIcon';
import commonStyles from '../../config/commonStyles';
import theme from '../../config/theme';
import Button from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

function FeedbackCard({ style, onPress }) {
	return (
		<View style={[styles.paper, style]} testID={testIDs.ROUTES.FEEDBACK_CARD}>
			<View style={styles.descriptionContainer}>
				<View style={styles.titleContainer}>
					<Title style={styles.title} variant="h4">
						Feedback please
					</Title>
					<FeedbackIcon />
				</View>
				<Body variant="b4" style={styles.body}>
					Wat vond je van deze route? Help ons de app te verbeteren
				</Body>
				<Button full style={styles.button} onPress={onPress} label="Feedback geven" />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	paper: {
		backgroundColor: theme.colors.background,
		alignSelf: 'stretch',
		borderRadius: theme.borderRadius,
		marginVertical: theme.spacing.xs,
		...commonStyles.shadow,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	title: {
		marginBottom: theme.spacing.xxs,
	},
	body: {
		marginBottom: theme.spacing.xxs,
	},
	descriptionContainer: {
		padding: theme.spacing.m,
	},
});

FeedbackCard.propTypes = {
	style: PropTypes.object,
	onPress: PropTypes.func.isRequired,
};
FeedbackCard.defaultProps = {
	style: {},
};

export default FeedbackCard;
