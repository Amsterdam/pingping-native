import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import Container from './Container';

import AstronautSitting from '../../assets/svg/AstronautSitting';
import ErrorIllustration from '../../assets/svg/ErrorIllustration';
import theme from '../../config/theme';
import { ERROR_TYPES } from '../../config/types';
import Header from '../header/Header';
import HeaderBackButton from '../header/HeaderBackButton';
import LoadingComponent from '../shared/LoadingComponent';
import MinimalErrorComponent from '../shared/MinimalErrorComponent';
import Button from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const errorTypes = {
	[ERROR_TYPES.unkownError]: {
		title: 'Oeps... Er is iets fout gegaan',
		body:
			'A wild error appeared. Its super effective. Zo te zien er is iets fout gegaan. Ga terug of probeer de app opnieuw op te starten. Sorry voor het ongemak.',
		illustration: <ErrorIllustration />,
		label: 'Probeer Opnieuw',
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

function ErrorComponent({
	error,
	functionToRetry = () => {},
	label = '',
	navigation,
}) {
	const errorType = errorTypes[error];
	const [loading, setLoading] = useState(false);
	const [
		errorMessage,
		setErrorMessage,
	] = useState('');

	const retry = async () => {
		setLoading(true);
		try {
			await functionToRetry();
		} catch (error) {
			if (error.message) {
				setErrorMessage(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<Container>
			{navigation && (
				<Header
					left={
						<HeaderBackButton
							onPressAction={() =>
								navigation.goBack()
							}
							color="dark"
						/>
					}
				/>
			)}

			<View style={styles.container}>
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
					label={label ? label : errorType.label}
					onPress={retry}
					style={styles.button}
				/>
				{errorMessage ? (
					<MinimalErrorComponent />
				) : (
					<></>
				)}
				{loading && <LoadingComponent />}
			</View>
		</Container>
	);
}

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
	error: PropTypes.string.isRequired,
	functionToRetry: PropTypes.func,
	label: PropTypes.string,
	navigation: PropTypes.object,
};

ErrorComponent.defaultProps = {
	error: ERROR_TYPES.unkownError,
	functionToRetry: () => {},
	label: '',
	navigation: null,
};

export default ErrorComponent;
