import React from 'react';

import {Button, Text} from 'native-base';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';

import {appColors, ppBaseColors} from '../../config/colors';
import {BORDER_RADIUS} from '../../config/commonStyles';
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
			style={[styles.button, active && styles.activeButton]}
			variant="outline"
			onPress={onPress}>
			<Text style={[styles.label, active && styles.activeText]}>{label}</Text>
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
		backgroundColor: appColors.background,
		marginBottom: 20,
		borderRadius: BORDER_RADIUS,
		borderColor: appColors.primary,
	},
	activeButton: {
		backgroundColor: ppBaseColors.PP_ORANGE,
		marginBottom: 20,
	},
	activeText: {
		color: ppBaseColors.PP_WHITE,
	},
	label: {
		paddingTop: 3,
		fontFamily: 'Heavitas',
		fontSize: normalizeValue(14),
		color: appColors.primary,
	},
});

export default AnswerButtonOnboarding;
