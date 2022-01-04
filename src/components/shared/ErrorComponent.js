import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
	RefreshControl,
	StyleSheet,
	View,
	ScrollView,
} from 'react-native';

import AstronautSitting from '../../assets/svg/AstronautSitting';
import ErrorIllustration from '../../assets/svg/ErrorIllustration';
import theme from '../../config/theme';
import { ERROR_TYPES } from '../../config/types';
import Button from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const errorTypes = {
	[ERROR_TYPES.unkownError]: {
		title: 'Oeps... Er is iets fout gegaan',
		body:
			'A wild error appeared. Its super effective. Zo te zien er is iets fout gegaan. Ga terug of probeer de app opnieuw op te starten. Sorry voor het ongemak.',
		illustration: <ErrorIllustration />,
		label: 'Terug',
	},
	[ERROR_TYPES.networkError]: {
		title: 'Slechte verbinding',
		body:
			'Daar zit je dan zonder internet. Maak opnieuw verbinding met het internet of probeer het later nog eens.',
		illustration: <AstronautSitting />,
		label: 'Probeer opnieuw',
	},
	[ERROR_TYPES.backendError]: {
		title:
			'Het ligt niet aan jou, het ligt aan ons',
		body:
			'Er gaat iets niet helemaal goed aan onze kant, we zijn druk bezig met het oplossen van het probleem. Probeer later weer gebruik te maken van Ping Ping.',
		illustration: <AstronautSitting />,
		label: 'Probeer opnieuw',
	},
};

const ErrorComponent = ({
	bootIssue,
	functionToRetry = () => {},
	onPress = () => {},
	deafultLabelOverRide = '',
}) => {
	const [refreshing, setRefreshing] = useState(
		false,
	);

	const onRefresh = () => {
		setRefreshing(true);
		functionToRetry();
		setRefreshing(false);
	};

	const errorType = errorTypes[bootIssue];

	return (
		<ScrollView
			contentContainerStyle={styles.container}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					tintColor={theme.colors.primary}
				/>
			}
		>
			{errorType.illustration}

			<View style={styles.textContainer}>
				<Title
					style={styles.title}
					align="center"
					variant="h2"
					numberOfLines={3}
				>
					{errorType.title}
				</Title>
				<Body variant="b3" align="center">
					{errorType.body}
				</Body>
			</View>

			<Button
				label={
					deafultLabelOverRide
						? deafultLabelOverRide
						: errorType.label
				}
				onPress={() => onPress()}
				style={styles.button}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-evenly',
		alignItems: 'center',
		flex: 1,
	},
	textContainer: {
		alignItems: 'center',
		padding: theme.spacing.xl,
	},
	title: {
		marginBottom: theme.spacing.l,
	},
	button: {
		alignSelf: 'center',
	},
});

ErrorComponent.propTypes = {
	bootIssue: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	deafultLabelOverRide: PropTypes.string,
};

ErrorComponent.defaultProps = {
	bootIssue: ERROR_TYPES.unkownError,
	deafultLabelOverRide: '',
};

export default ErrorComponent;
