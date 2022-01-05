import React from 'react';

import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import theme from '../../config/theme';
import normalizeValue from '../../helpers/normalizeValue';

const AnswerButtonOnboarding = ({
	onPress = () => {},
	label = 'no label',
	active = false,
	testid,
}) => {
	return (
		<Button
			testID={testid}
			style={[
				styles.button,
				active && styles.activeButton,
			]}
			variant="outline"
			onPress={onPress}
		>
			<Text
				style={[
					styles.label,
					active && styles.activeText,
				]}
			>
				{label}
			</Text>
		</Button>
	);
};

AnswerButtonOnboarding.propTypes = {
	onPress: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	active: PropTypes.bool,
	testid: PropTypes.string,
};

AnswerButtonOnboarding.defaultProps = {
	active: true,
	testid: '',
};

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		backgroundColor: theme.colors.background,
		marginBottom: theme.spacing.m,
		borderRadius: theme.borderRadius,
		borderColor: theme.colors.primary,
	},
	activeButton: {
		backgroundColor: theme.colors.primary,
		marginBottom: theme.spacing.m,
	},
	activeText: {
		color: theme.colors.white,
	},
	label: {
		paddingTop: theme.spacing.xxs,
		fontFamily: 'Heavitas',
		fontSize: normalizeValue(14),
		color: theme.colors.primary,
	},
});

export default AnswerButtonOnboarding;
