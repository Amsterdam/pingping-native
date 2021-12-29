import React from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import routes from '../../App/stacks/routes';
import theme from '../../config/theme';
import Button from '../shared/RoundedButton';
import Body from '../typography/Body';
import Title from '../typography/Title';

const OnboardingItem = ({
	view,
	buttonAction,
	isLastItem,
	navigation,
}) => {
	const navigator = async () => {
		if (isLastItem) {
			const acceptedPolicy = await AsyncStorage.getItem(
				'@acceptedPolicy',
			);
			if (acceptedPolicy) {
				return navigation.navigate(
					routes.onboardingStack.questionScreen,
				);
			}
			return navigation.navigate(
				routes.onboardingStack
					.privacyPolicyScreen,
			);
		}
		return buttonAction.scrollBy(1);
	};

	return (
		<View style={styles.viewContainer}>
			<View>{view.svg}</View>
			<View>
				<Title
					style={styles.title}
					variant="h2"
					align="center"
				>
					{view.title}
				</Title>
				<Body
					variant="b3"
					align="center"
					style={styles.onboardingText}
				>
					{view.text}
				</Body>
			</View>
			<View>
				<Button
					style={styles.button}
					onPress={navigator}
					testid={view.testid}
					label={view.buttonLabel}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
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
	view: PropTypes.object.isRequired,
	buttonAction: PropTypes.object,
	isLastItem: PropTypes.bool.isRequired,
	navigation: PropTypes.object.isRequired,
};

export default OnboardingItem;
