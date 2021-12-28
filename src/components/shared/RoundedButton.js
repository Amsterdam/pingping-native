import React from 'react';

import PropTypes from 'prop-types';
import {
	ActivityIndicator,
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
} from 'react-native';

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
		<TouchableOpacity
			style={[
				buttonBase,
				disabled && styles.disabled,
				deleteButton && styles.deleteButton,
				style,
			]}
			testID={testid}
			activeOpacity={0.1}
			isDisabled={disabled}
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
		</TouchableOpacity>
	);
};

const buttonBase = {
	backgroundColor: appColors.primary,
	borderRadius: 5,
	justifyContent: 'center',
	flexDirection: 'row',
	padding: 10,
};

const styles = StyleSheet.create({
	label: {
		paddingTop: 3,
		fontFamily: 'Heavitas',
		fontSize: normalizeValue(14),
		color: ppBaseColors.PP_WHITE,
		alignItems: 'center',
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
