import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import BackPack from '../../assets/svg/BackPack';
import Vault from '../../assets/svg/Vault';
import WelcomeIllustration from '../../assets/svg/WelcomeIllustration';
import theme from '../../config/theme';
import Body from '../typography/Body';
import Title from '../typography/Title';

function OnboardingItem({ pageContent: { svg, title, text } }) {
	const illustrations = {
		Vault,
		WelcomeIllustration,
		BackPack,
	};

	const SvgIllustration = illustrations[svg || 'BackPack'];

	return (
		<View style={styles.viewContainer}>
			<View accessibilityRole="image">
				<SvgIllustration />
			</View>
			<View>
				<Title style={styles.title} variant="h2" align="center">
					{title}
				</Title>
				<Body variant="b3" align="center" style={styles.onboardingText}>
					{text}
				</Body>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		height: '100%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		backgroundColor: theme.colors.background,
		padding: theme.spacing.s,
	},
	title: {
		color: theme.colors.text,
	},
	onboardingText: {
		color: theme.colors.subText,
	},
	button: {
		backgroundColor: theme.colors.primary,
	},
});

OnboardingItem.propTypes = {
	pageContent: PropTypes.shape({
		svg: PropTypes.string,
		title: PropTypes.string,
		text: PropTypes.string,
		testid: PropTypes.string,
		buttonLabel: PropTypes.string,
	}).isRequired,
};

export default OnboardingItem;
