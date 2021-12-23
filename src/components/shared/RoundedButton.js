import React from 'react';

import {Button, Text} from 'native-base';
import PropTypes from 'prop-types';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {appColors, ppBaseColors} from '../../config/colors';
import normalizeValue from '../../helpers/normalizeValue';

const RoundedButton = ({
	label = '',
	disabled = false,
	onPress = () => {},
	deleteButton = false,
	icon = null,
	style = {},
	loading = false,
	testid = '',
	full = false,
	labelStyle = {},
}) => {
	return (
		<Button
			style={[
				styles.button,
				disabled && styles.disabled,
				deleteButton && styles.deleteButton,
				style,
			]}
			full={full}
			testID={testid}
			disabled={disabled}
			onPress={onPress}>
			<View style={styles.innerContainer}>
				{loading ? (
					<ActivityIndicator color={appColors.danger} />
				) : (
					<React.Fragment>
						{icon && icon}
						<Text style={[styles.label, labelStyle]}>{label}</Text>
					</React.Fragment>
				)}
			</View>
		</Button>
	);
};

const buttonBase = {
	backgroundColor: appColors.primary,
	borderRadius: 10,
};

const styles = StyleSheet.create({
	button: {...buttonBase},
	label: {
		paddingTop: 3,
		fontFamily: 'Heavitas',
		fontSize: normalizeValue(14),
		color: ppBaseColors.PP_WHITE,
	},
	disabled: {
		...buttonBase,
		backgroundColor: ppBaseColors.PP_GRAY,
	},
	deleteButton: {
		backgroundColor: ppBaseColors.PP_PINK,
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
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	loading: PropTypes.bool,
	testid: PropTypes.string,
	full: PropTypes.bool,
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
	full: false,
	labelStyle: {},
};

export default RoundedButton;
