import React from 'react';

import PropTypes from 'prop-types';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import theme from '../../config/theme';
import normalizeValue from '../../helpers/normalizeValue';

function RoundedButton({
	label = '',
	disabled = false,
	onPress = () => {},
	deleteButton = false,
	icon = null,
	style = {},
	loading = false,
	testid = '',
	labelStyle = {},
}) {
	return (
		<TouchableOpacity
			style={[
				buttonBase,
				disabled && styles.disabled,
				deleteButton && styles.deleteButton,
				style,
			]}
			testID={testid}
			activeOpacity={0.1}
			disabled={disabled}
			onPress={onPress}
		>
			<View style={styles.innerContainer}>
				{loading ? (
					<ActivityIndicator color={theme.colors.danger} />
				) : (
					<>
						{icon && icon}
						<Text style={[styles.label, labelStyle]}>{label}</Text>
					</>
				)}
			</View>
		</TouchableOpacity>
	);
}

const buttonBase = {
	backgroundColor: theme.colors.primary,
	borderRadius: 5,
	justifyContent: 'center',
	flexDirection: 'row',
	padding: theme.spacing.xs,
};

const styles = StyleSheet.create({
	label: {
		fontFamily: 'Heavitas',
		fontSize: normalizeValue(14),
		color: theme.colors.white,
		alignItems: 'center',
	},
	disabled: {
		...buttonBase,
		backgroundColor: theme.colors.greyedOut,
	},
	deleteButton: {
		backgroundColor: theme.colors.danger,
	},
	innerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

RoundedButton.propTypes = {
	label: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onPress: PropTypes.func.isRequired,
	deleteButton: PropTypes.bool,
	icon: PropTypes.element,
	loading: PropTypes.bool,
	testid: PropTypes.string,
	labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

RoundedButton.defaultProps = {
	disabled: false,
	deleteButton: false,
	icon: null,
	style: {},
	loading: false,
	testid: '',
	labelStyle: {},
};

export default RoundedButton;
