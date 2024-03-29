import React from 'react';

import PropTypes from 'prop-types';
import {
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

import theme from '../../config/theme';
import Title from '../typography/Title';

function TextButton({ onPress, testID, label }) {
	return (
		<TouchableOpacity
			onPress={onPress}
			testID={testID}
		>
			<Title
				style={styles.buttonLabel}
				variant="h7"
			>
				{label}
			</Title>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	buttonLabel: {
		color: theme.colors.greyedOut,
		padding: theme.spacing.xs,
	},
});

TextButton.propTypes = {
	onPress: PropTypes.func.isRequired,
	testID: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default TextButton;
