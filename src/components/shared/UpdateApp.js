import React from 'react';

import { StyleSheet, View, StatusBar, Platform, Linking } from 'react-native';

import Container from './Container';
import Button from './RoundedButton';

import UpdateSvg from '../../assets/svg/UpdateSvg';
import theme from '../../config/theme';
import sentryHelper from '../../helpers/sentryHelper';
import Body from '../typography/Body';
import Title from '../typography/Title';

function UpdateApp() {
	const openAppStore = () => {
		const link =
			Platform.OS === 'ios'
				? 'itms-apps://apps.apple.com/nl/app/pingping/id1531867912?l=nl'
				: 'market://details?id=com.pingpingnative';
		Linking.canOpenURL(link).then(
			(supported) => {
				if (supported) {
					Linking.openURL(link);
				}
			},
			(error) => sentryHelper(error.message)
		);
	};
	return (
		<Container style={styles.container}>
			<StatusBar backgroundColor={theme.colors.white} barStyle="dark-content" />
			<UpdateSvg />
			<View style={styles.textContainer}>
				<Title style={styles.title} align="center" variant="h2" numberOfLines={3}>
					Tijd voor een update
				</Title>
				<Body variant="b3" align="center">
					De app is toe aan een update. Zonder update werkt de app niet zoals het hoort.
					Druk op de knop hieronder om de update te starten.
				</Body>
			</View>

			<Button label="Start update" onPress={openAppStore} style={styles.button} />
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'space-evenly',
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

export default UpdateApp;
